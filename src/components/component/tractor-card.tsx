import { Card, CardContent } from "../ui/card";
import { useSelector } from "react-redux";
import { selectCity } from "@/app/redux/slice/locationSlice";

export default function Tractor_card({slug}:{slug:any}){
  const city = useSelector(selectCity)

  console.log(slug,"from card");
  
    return(
        <Card className="w-full rounded-md">
          <img
            alt="Tractor"
            className="w-full"
            height="100"
            src={slug.images[0]}
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <CardContent className="mt-2">
            <p className="text-green-600 font-bold">₹ {slug.rate}/day</p>
            <p className="font-medium">{slug.name}</p>
            <p className="text-red-700 font-medium ">{slug.howOld} years old</p>
            <p className="text-gray-500">{city}</p>
          </CardContent>
        </Card>
    )
}