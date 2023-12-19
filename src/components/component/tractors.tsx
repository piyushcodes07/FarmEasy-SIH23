import { Card, CardContent } from "../ui/card";
import Tractor_card from './tractor-card'
import dataBase from '../../../dummy_data.json'


export default function Tractors({slug}:{slug:string}) {

  
  
  const data:any = dataBase[slug as keyof {}]

  if(!data){
    return(
      <div className="font-bold text-red-500 ml-2">
        Sorry no machines for this city!!
      </div>
    )
  }
  
  // console.log(slug,"from tractors");
  
  return <div className=" grid grid-cols-2 overflow-x-auto p-2 gap-4">
    {data.machine_renting_tractors.map( (Element:any) =>(
      <Tractor_card key={Element.id}  slug={Element}/>
    ))}
  </div>;
}
