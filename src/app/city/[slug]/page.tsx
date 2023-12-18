"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import dataBase from '../../../../dummy_data.json'


import {
  selectCity,
  selectLat,
  selectLng,
} from "@/app/redux/slice/locationSlice";
import NearbyWearhousesSection from "@/components/component/nearbyWearhousesSection";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const fetchData = async () => {
  const lat  = useSelector(selectLat);
  const long = useSelector(selectLng);

  let weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=df471ef10c63ddbe0c3555fe6d225432`
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      return result;
    });
  return weather;
};

export default async function (props:any) {
  // let slug = props.params.slug
  // const dataWearhouse: any = dataBase[slug as keyof {}];
    // console.log(props,'from homePage');
    
    const router = useRouter()
  const city = useSelector(selectCity);
  const data = await fetchData();
  console.log(data, "i am data");

  return (
    <div className="max-w-sm   mx-auto">
      <div style={{backgroundImage: `url("https://images.unsplash.com/photo-1533460004989-cef01064af7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBncmFzc3xlbnwwfHwwfHx8MA%3D%3D")` }} className="bg-green-200 cover bg-no-repeat p-4">
        <div className="text-start">
          <h1 className="text-6xl font-bold text-orange-600">
            {data.main.temp+"°"}
          </h1>
          <p className="text-sm text-gray-700">{city}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <CloudSunIcon className="text-orange-500" />
            <p>{data.weather[0].description}</p>
          </div>
          <div>
            <CloudRainIcon className="text-green-500" />
            <p>{data.clouds.all.toString() + "%"}</p>
          </div>
          <div>
            <WindIcon className="text-green-700" />
            <p>{data.wind.speed.toString() + " m/s"}</p>
          </div>
          <SnowflakeIcon className="text-blue-200" />
        </div>
      </div>
      <div className="mt-1 p-4 bg-green-50">
        <h2 className="text-2xl font-bold text-orange-600">
        Nearby Wearhouses,
        </h2>
        <p className="text-sm font-medium text-gray-600">Storage facilities</p>
        <NearbyWearhousesSection slug={props.params.slug}/>
      </div>
      <div style={{scrollbarWidth:"thin",scrollbarColor:"white",}} className="flex overflow-x-scroll gap-4 shadow-2xl bg-slate-100 mt-1">
        <div onClick={() => router.push(`/city/${props.params.slug}/machineRenting`)} style={{background:"linear-gradient(145.06deg, #BCF7B7 12.99%, rgba(188, 200, 46, 0.364583) 37.83%, #035D2D 91.48%)"}} className="min-w-[40%] rounded-md text-center">
         
          <p className="text-sm mt-2 font-extrabold text-start ml-4 text-back">Machine<br></br> Renting</p>
          <img
            alt="Machine Renting"
            className="mx-auto"
            height="300"
            src="/rent_figma.png"
            style={{
            //   aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
        </div>
        <div onClick={() => router.push(`/city/${props.params.slug}/landRenting`)} style={{background:"linear-gradient(145.06deg, #F7B7ED 12.99%, rgba(200, 46, 194, 0.364583) 37.83%, #55035D 91.48%)"}} className=" min-w-[40%] rounded-md text-center">
            <p className="text-sm mt-2 font-extrabold text-start ml-4 text-back">Land<br></br> Renting</p>
          <img
            alt="land renting"
            className="mx-auto"
            height="500"
            src="/land renting.png"
            style={{
            //   aspectRatio: "64/64",
              objectFit: "cover",

            }}
            width="300"
          />
        </div>
        <div style={{background:"linear-gradient(138.78deg, #F8D06B 10.05%, rgba(200, 157, 46, 0.364583) 35.86%, #746906 91.62%)"}} className="min-w-[40%] text-center rounded-md">
            <p className="text-sm mt-2 font-extrabold text-start ml-4 text-back">Direct Selling</p>
          <img
            alt="Direct Selling"
            className="mx-auto"
            height="300"
            src="/direct_selling.png"
            style={{
            //   aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="120"
          />
        </div>
        
        <div style={{background:"linear-gradient(139deg, #F8D06B 10.05%, rgba(200, 157, 46, 0.36) 35.86%, #746906 91.62%)"}} className="min-w-[40%] text-center rounded-md">
            <p className="text-sm mt-2 font-extrabold text-start ml-4 text-back">Transport<br></br> Facilities</p>
          <img
            alt="Direct Selling"
            className="mx-auto"
            height="300"
            src="/transport.png"
            style={{
            //   aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="140"
          />
        </div>
      </div>
    </div>
  );
}

function CloudSunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  );
}

function CloudRainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  );
}

function SnowflakeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </svg>
  );
}

function WindIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}