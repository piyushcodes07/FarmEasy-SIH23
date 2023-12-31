""
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ReactDOM } from "react";
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux";
import { selectCity } from "@/app/redux/slice/locationSlice";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation'
export function FinalRentPage(data:any) {



  const router = useRouter()
  const city = useSelector(selectCity);
  console.log(data, "from final rent");

  
  return (
    <div className="bg-white max-w-100vw mx-auto">
      <nav className="flex items-center justify-between px-4 py-2  bg-green-600 text-white">
      <button onClick={() => router.back()}>
        <ChevronLeftIcon className="text-white" />
        </button>
        <h1 className="text-lg font-semibold">{data.slug.name}</h1>
        <div />
      </nav>
      <ScrollArea  className="relative  w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max h-[300px] space-x-4 p-4">
        <img
          alt="Tractor Image"
          className="w-full"
          height="369"
          src={data.slug.images[0]}
          style={{
            aspectRatio: "369/369",
            objectFit: "cover",
          }}
          width="369"
        />
        <img
          alt="Tractor Image"
          className="w-full"
          height="369"
          src={data.slug.images[1]}
          style={{
            aspectRatio: "369/369",
            objectFit: "cover",
          }}
          width="369"
        />
        <img
          alt="Tractor Image"
          className="w-full"
          height="369"
          src={data.slug.images[2]}
          style={{
            aspectRatio: "369/369",
            objectFit: "cover",
          }}
          width="369"
        />
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1 pb-2">
          <span className="h-2 w-2 bg-gray-300 rounded-full" />
          <span className="h-2 w-2 bg-gray-300 rounded-full" />
          <span className="h-2 w-2 bg-gray-300 rounded-full" />
        </div> */}
        <ScrollBar orientation="horizontal" />
      </ScrollArea >
      <div className="px-4 py-2">
        <div className="flex items-center space-x-1">
          <IndianRupeeIcon className="text-green-600" />
          <span className="text-lg font-semibold">{data.slug.rate}/day</span>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Description</h2>
          <p>{data.slug.description}</p>
        </div>
        <div className="mt-4">
          <LocateIcon className="inline text-green-600" />
          <span>{city}</span>
        </div>
        <div className="mt-2">
          <PhoneIcon className="inline text-green-600" />
          <span>{data.slug.phone} (owner)</span>
        </div>
      </div>
      <div className="px-4 py-4">
      {/* <a href="tel:1-847-555-5555">1-847-555-5555</a>
      <a href="tel:18475555555">Click Here To Call Support 1-847-555-5555</a>
      <a href="callto:1234567">Call 123-4567</a> */}
        <Link href={`tel:+770928381`}>
          
          <Button  className="w-full  bg-green-600 text-white">CALL NOW</Button>
        </Link>
      </div>
    </div>
  )
}


function PhoneIcon(props:any) {
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
  )
}


function ChevronLeftIcon(props:any) {
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
  )
}


function LocateIcon(props:any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function IndianRupeeIcon(props:any) {
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
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
    </svg>
  )
}
