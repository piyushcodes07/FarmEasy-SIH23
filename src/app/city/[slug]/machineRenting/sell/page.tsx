"use client";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { url } from "inspector";
import { useRouter } from "next/navigation";
export default function SellEquipment() {

  const router = useRouter()

  function uploadToClient(e: any) {
    const i = e.target.files[0];
    console.log("image uploaded");
  }

  const [file, setFile] = useState<any>();
  function handleChange(e:any) {
      console.log(e.target.files);
      let previewImage=URL.createObjectURL(e.target.files[0])
      setFile(previewImage);
  }


  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center bg-green-500 justify-around p-4 border-b">
        <ArrowLeftIcon onClick={()=>router.back()} className="text-gray-600" />
        <h1 className="text-lg font-semibold">Give Equipment For Rent</h1>
        {/* <MoreVerticalIcon className="text-gray-600" /> */}
      </div>
      <div className="p-4">

        <input
          
          type="file"
          name="myImage"
          onChange={handleChange}
          className="flex flex-col h-[60px] w-[100%]  items-center justify-center p-4 border-2 border-dashed rounded-lg mb-4"
        />
        <img src={file} alt="" className="w-[100px] h-[100px]"/>

        <UploadIcon className="text-gray-400 mb-2" />
        <span className="text-gray-700">Upload image</span>

        <div className="mb-4">
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent position="popper" className="bg-slate-400">
              <SelectItem value="agriculture">Tractor</SelectItem>
              <SelectItem value="electronics">Plows</SelectItem>
              <SelectItem value="electronics">Sprayers</SelectItem>
              <SelectItem value="electronics">Water Pump</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input className="text-black" placeholder="Machine Name" />
          <Input placeholder="₹ Price" />
        </div>
        <Input className="mb-4" placeholder="Contact Number" />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Input placeholder="State" />
          <Input placeholder="City" />
        </div>
        <Input className="mb-4" placeholder="Village" />
        <textarea
          className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border rounded-md mb-4"
          placeholder="Description"
        />
        <Button className="w-full bg-green-500 text-white">Post</Button>
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

function MoreVerticalIcon(props: any) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

function UploadIcon(props: any) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
