"use client";
// import { db } from "../../../../../firebase/clientApp";
import Plow from "@/components/component/plow";
import Tractors from "@/components/component/tractors";
import { Input } from "@/components/ui/input";
import dataBase from'../../../../../dummy_data.json' 
import Sprayers from "@/components/component/sprayers";
import { useDispatch } from "react-redux";
import { setFirstCity } from "@/app/redux/slice/locationSlice";
// import { collection } from "firebase/firestore";
// import { useCollection } from "react-firebase-hooks/firestore";
// import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
// import {
//   getFirestore,
//   Timestamp,
//   FieldValue,
//   Filter,
// } from "firebase-admin/firestore";

export default function MachineRenting(props:{params:{slug:string}}) {
  // console.log(props.params.slug,"from slug");
  const dispatch = useDispatch()
  dispatch(setFirstCity(props.params.slug))
  
  return (
    <div className="max-w-sm  mx-auto">
    <div className="max-w-100vw mx-auto">
      <div className="bg-green-500 p-4 flex w-full items-center justify-between">
        <ChevronLeftIcon className="text-white" />
        <h1 className="text-white text-lg font-semibold">Farming Equipments</h1>
        <div className="w-6 h-6" />
      </div>
      <div className="relative mt-4">
        <Input className="pl-10" placeholder="Search" />
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <h2 className="mt-6 mb-4 font-bold text-2xl ml-2 text-red-700">
        Tractors
      </h2>
      <Tractors slug={props.params.slug} />
      <h2 className="mt-6 mb-4 font-bold text-2xl ml-2 text-red-700 "> Plows</h2>

      <Plow slug={props.params.slug}/>
      <h2 className="mt-6 mb-4 font-bold text-2xl ml-2 text-red-700 "> Sprayers</h2>

      <Sprayers slug={props.params.slug}/>
      
    </div>
    </div>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
