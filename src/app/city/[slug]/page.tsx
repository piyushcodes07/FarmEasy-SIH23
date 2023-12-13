"use client";
import {
  selectCity,
  selectLat,
  selectLng,
} from "@/app/redux/slice/locationSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const fetchData = async () => {
  const lat = useSelector(selectLat);
  const long = useSelector(selectLng);

  let weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=bea7d1bb84bfc7b3d107424d13ee27ca`
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);

      return result;
    });
  return weather;
};

export default async function () {
  const city = useSelector(selectCity);
  const data = await fetchData();
  console.log(data, "i am data");

  return (
    <div className="max-w-sm  mx-auto">
      <div className="bg-green-200 p-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-orange-600">
            {data.main.temp}
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
        भंडारण की सुविधाएं
        </h2>
        <p className="text-sm font-medium text-gray-600">आसपास के गोदाम,</p>
        <div className="flex overflow-x-auto gap-4 mt-4">
          <div className="min-w-[40%]">
            <img
              alt="Warehouse"
              className="rounded-lg"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p className="text-sm mt-2 text-green-700">
              40x50 sq.ft. <br /> $150/day
            </p>
          </div>
          <div className="min-w-[40%]">
            <img
              alt="Warehouse"
              className="rounded-lg"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p className="text-sm mt-2 text-green-700">
              30x57 sq.ft. <br /> $120/day
            </p>
          </div>
          <div className="min-w-[40%]">
            <img
              alt="Warehouse"
              className="rounded-lg"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p className="text-sm mt-2 text-green-700">
              100x50 sq.ft. <br /> $190/day
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center bg-green-200  p-4">
        <div className="text-center">
          <img
            alt="Machine Renting"
            className="mx-auto"
            height="64"
            src="/placeholder.svg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="64"
          />
          <p className="text-sm mt-2 text-orange-600">Machine Renting</p>
        </div>
        <div className="text-center">
          <img
            alt="Direct Selling"
            className="mx-auto"
            height="64"
            src="/placeholder.svg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="64"
          />
          <p className="text-sm mt-2 text-orange-600">Direct Selling</p>
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
