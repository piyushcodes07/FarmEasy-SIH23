import { Card } from "../ui/card";
import { CardContent } from "../ui/card";

export default function Plow(){
    return (
        <div className="grid grid-cols-2 p-2 gap-4">
    
        
        <Card className="w-full">
          <img
            alt="Plow"
            className="w-full"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <CardContent>
            <p className="text-red-600 font-semibold">₹ 150/day</p>
            <p className="font-medium">Chisel plow</p>
            <p className="text-gray-500">3 years old</p>
            <p className="text-gray-500">Balia, Uttar pradesh</p>
          </CardContent>
        </Card>
        
        <Card className="w-full">
          <img
            alt="Plow"
            className="w-full"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <CardContent>
            <p className="text-red-600 font-semibold">₹ 150/day</p>
            <p className="font-medium">Chisel plow</p>
            <p className="text-gray-500">3 years old</p>
            <p className="text-gray-500">Balia, Uttar pradesh</p>
          </CardContent>
        </Card>
      </div>
    )
}