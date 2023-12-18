// import { CardContent } from "@mui/material";
"use client"
import { selectFirstCity } from "@/app/redux/slice/locationSlice";
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { useSelector } from "react-redux";
export default function LandRentingCard({slug,props}:{slug:any,props:any}){

    console.log(props,"from land rent");
    const firstCity=useSelector(selectFirstCity)

    return(
        <div>
              <div className="max-w-sm  mx-auto">
              <Link className="text-green-600" href={`/city/${props}/landRenting/book?&id=${slug.id}`}> 
            <Card className="w-full">
          <CardContent>
            <img
              alt="Farming Land"
              className="mt-2 w-full h-auto mb-2"
              height="150"
              src={slug.mainImage}
              style={{
                aspectRatio: "300/150",
                objectFit: "cover",
              }}
              width="300"
            />
            <h2 className="text-lg font-semibold">{slug.name}</h2>
            <p className="text-green-500 text-lg font-semibold">₹ {slug.rateInThousand} K / month</p>
            <p className="text-gray-600">{slug.areaInSqft} sq.ft.</p>
            <div className="flex justify-between items-center mt-2">
              <Link className="text-green-600" href={`/city/${props}/landRenting/book?&id=${slug.id}`}> 
                See More Details
              </Link>
              <Link className="text-green-600" href={`/city/${props}/landRenting/book?&id=${slug.id}`}> 
              <Button className="bg-green-500 text-white">Rent</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        </Link>
        </div>
        </div>
    )
}