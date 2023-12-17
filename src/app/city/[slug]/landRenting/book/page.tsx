"use client";
import { Button } from "@/components/ui/button";
import e from "express";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useSearchParams } from "next/navigation";
import dataBase from '../../../../../../dummy_data.json'

export default function LandRentingFinalPage(props:{params:{slug:string}}) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  
  const [slider, setSlider] = useState(1);
  
  function valuetext(value: number) {
      setSlider(value);
      return `${value} months`;
    }
    const slug = props.params.slug
    var fianlObj:any = dataBase[slug as keyof {}];
    if(!fianlObj){
        return (
            <div>
            No data in database about this city!!
        </div>
    )
}
fianlObj = fianlObj.landRenting.find((element:any)=>element.id==id)
let rate: number = fianlObj.rateInThousand;
  console.log(fianlObj);

  if(!fianlObj){
    return (
        <div>
            No data in database about this city!!
        </div>
    )
  }
  

  return (
    <div className="max-w-sm mx-auto bg-white">
      <div className="flex items-center p-4 border-b bg-green-500 border-gray-200">
        <ArrowLeftIcon className="text-gray-600 mr-2" />
        <h1 className="text-lg font-semibold">AgroRent Fields</h1>
      </div>
      <div className="p-4">
        <div className="rounded-lg overflow-hidden mb-4">
          <img
            alt="Farming Land"
            className="w-full h-auto"
            height="200"
            src={fianlObj.mainImage}
            style={{
              aspectRatio: "320/200",
              objectFit: "cover",
            }}
            width="320"
          />
        </div>
        <h2 className="text-xl font-bold mb-1">{fianlObj.name}</h2>
        <p className="text-gray-500 mb-4">
          <PhoneIcon className="inline mr-1" />
          {fianlObj.phone} (owner)
        </p>
        <p className="text-green-500 font-semibold ">₹ {fianlObj.rateInThousand}k/ month</p>
        <p className="text-gray-600 font-semibold mb-4">{fianlObj.areaInSqft} sq.ft.</p>
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-600 mb-6">
         {fianlObj.description}
        </p>
        <div className="mb-4">
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
          </Box>
        </div>
        <div className="flex justify-between flex-col items-start mb-6">
          <span className="text-green-600 font-semibold">{slider} months</span>
          <span className="text-xl font-bold">{`₹ ${slider * rate*1000}`}</span>
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
