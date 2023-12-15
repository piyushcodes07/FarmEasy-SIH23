import { Card, CardContent } from "../ui/card";
import { useSelector } from "react-redux";
import { selectCity } from "@/app/redux/slice/locationSlice";
export default function Plow_card(data:any){
    const city = useSelector(selectCity) 
    console.log(data,"from plow card");
    
    return(
        <Card className="w-full rounded-md">
          <img
            alt="Plow"
            className="w-full"
            height="100"
            src={data.slug.images[0]}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <CardContent className="mt-2">
            <p className="text-green-600 font-bold">₹ {data.slug.rate}/day</p>
            <p className="font-medium">{data.slug.name}</p>
            <p className="text-red-700 font-medium ">{data.slug.howOld} years old</p>
            <p className="text-gray-500">{city}</p>
          </CardContent>
        </Card>
    )
}