"use client";
import { Button } from "@/components/ui/button";
import e from "express";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";



export function LandRentingFinalPage() {
  const [slider, setSlider] = useState(1);
  let rate:number = 400;

  function valuetext(value: number) {
    setSlider(value)
    return `${value}°C`;
    
  }
  return (
    <div className="max-w-sm mx-auto bg-white">
      <div className="flex items-center p-4 border-b border-gray-200">
        <ArrowLeftIcon className="text-gray-600 mr-2" />
        <h1 className="text-lg font-semibold">AgroRent Fields</h1>
      </div>
      <div className="p-4">
        <div className="rounded-lg overflow-hidden mb-4">
          <img
            alt="Farming Land"
            className="w-full h-auto"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "320/200",
              objectFit: "cover",
            }}
            width="320"
          />
        </div>
        <h2 className="text-xl font-bold mb-1">Farming Land in Nagpur, MH</h2>
        <p className="text-gray-500 mb-4">
          <PhoneIcon className="inline mr-1" />
          +91970634781 (owner)
        </p>
        <p className="text-green-500 font-semibold mb-6">₹ 5.7k/ month</p>
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-600 mb-6">
          We have surplus land available for rent with excellent soil quality,
          situated near an active water source.
        </p>
        <div className="mb-4">
          {/* <input
            className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
            type="range" min="1" max="100" value={slider} onChange={(e)=>e.target.value}
          /> */}
          <Box sx={{ width: 350 }}>
            <Slider
            className=""
              aria-label="months"
              defaultValue={slider}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={12}
            />
            {/* <Slider
              defaultValue={30}
              step={10}
              marks
              min={10}
              max={110}
              disabled
            /> */}
          </Box>
        </div>
        <div className="flex justify-between flex-col items-start mb-6">
          <span className="text-green-600 font-semibold">{slider} months</span>
          <span className="text-xl font-bold">{`₹ ${slider * rate}`}</span>
        </div>
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
          Claim Now
        </Button>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props: any) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
