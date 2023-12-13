"use client";
import { db } from "../../../../../firebase/clientApp";
import Plow from "@/components/component/plow";
import Tractors from "@/components/component/tractors";
import { Input } from "@/components/ui/input";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";

export default function MachineRenting() {

    const collectionRef = collection(db,"storage");
  // const [storage,loading,error] = useCollection(collection(db,"storage"))
  // console.log(storage);
  // const citiesRef = db.collection('storage');

//   const serviceAccount = require("./");

//   initializeApp({
//     credential: cert(serviceAccount),
//   });

//   const db = getFirestore();

  return (
    <div className="max-w-100vw mx-auto">
      <div className="bg-green-500 p-4 flex w-full items-center justify-between">
        <ChevronLeftIcon className="text-white" />
        <h1 className="text-white text-lg font-semibold">खेती के उपकरण</h1>
        <div className="w-6 h-6" />
      </div>
      <div className="relative mt-4">
        <Input className="pl-10" placeholder="Search" />
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <h2 className="mt-6 mb-4 font-bold text-2xl ml-2 text-green-500">
        {" "}
        ट्रैक्टर
      </h2>
      <Tractors />
      <h2 className="mt-6 mb-4 font-bold text-2xl ml-2 text-green-500 "> हल</h2>

      <Plow />
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
