// "use client";
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
import WeatherComponent from './weatherComponent';


// const fetchData = async () => {
//   const lat  = useSelector(selectLat);
//   const long = useSelector(selectLng);

//   let weather = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=df471ef10c63ddbe0c3555fe6d225432`
//   )
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);

//       return result;
//     });
//   return weather;
// };

export default async function (props:{params:{slug:string}}) {
  // let slug = props.params.slug
  // const dataWearhouse: any = dataBase[slug as keyof {}];
    // console.log(props,'from homePage');
    
    // const router = useRouter()

  // const data = await fetchData();
  // console.log(data, "i am data");

  return (
    <div className="max-w-[390px]   mx-auto">
      <WeatherComponent/>
      <div className="mt-1 p-4 bg-green-50">
        <h2 className="text-2xl font-bold text-orange-600">
        Nearby Wearhouses,
        </h2>
        <p className="text-sm font-medium text-gray-600">Storage facilities</p>
        <NearbyWearhousesSection slug="rajam"/>
      </div>
      <div style={{scrollbarWidth:"thin",scrollbarColor:"white",}} className="flex overflow-x-scroll gap-4 shadow-2xl bg-slate-100 mt-1">
        <Link href={`/city/${props.params.slug}/machineRenting`}  style={{background:"linear-gradient(145.06deg, #BCF7B7 12.99%, rgba(188, 200, 46, 0.364583) 37.83%, #035D2D 91.48%)"}} className="min-w-[40%] rounded-md text-center">
         
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
        </Link>
        <Link href={`/city/${props.params.slug}/landRenting`}  style={{background:"linear-gradient(145.06deg, #F7B7ED 12.99%, rgba(200, 46, 194, 0.364583) 37.83%, #55035D 91.48%)"}} className=" min-w-[40%] rounded-md text-center">
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
        </Link>
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



