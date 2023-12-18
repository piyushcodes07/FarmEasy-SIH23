
import Link from "next/link"
import LandRentingCard from "./card"  
import dataBase from '../../../../../dummy_data.json'

export default function LandRentingSemiFinal(props:{params:{slug:string}}) {


    const slug = props.params.slug;
    var data: any = dataBase[slug as keyof {}];
    
    if(!data){
        return(
            <div >
                <h2 className="text-red-700 bold text-xl ">
                    No lands for rental in this City!!
                </h2>
            </div>
        )
    }
    


  return (
    
    <div className="max-w-sm mx-auto">
      <div className="bg-green-500 text-white p-4 flex items-center justify-between">
        <ArrowLeftIcon className="text-white h-6 w-6" />
        <h1 className="text-xl font-bold">AgroRent Fields</h1>
        <MicroscopeIcon className="text-white h-6 w-6" />
      </div>
      <div className="p-4 space-y-4">
        
        {data.landRenting.map((card:any)=>
            <LandRentingCard props={props.params.slug} key={card.id} slug={card}/>
        )}
        
       
      </div>
    </div>
  )
}


function ArrowLeftIcon(props:any) {
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
  )
}


function MicroscopeIcon(props:any) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}
