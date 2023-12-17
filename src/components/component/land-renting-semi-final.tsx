
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export function LandRentingSemiFinal() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-green-500 text-white p-4 flex items-center justify-between">
        <ArrowLeftIcon className="text-white h-6 w-6" />
        <h1 className="text-xl font-bold">AgroRent Fields</h1>
        <MicroscopeIcon className="text-white h-6 w-6" />
      </div>
      <div className="p-4 space-y-4">
        <Card className="w-full">
          <CardContent>
            <img
              alt="Farming Land"
              className="w-full h-auto mb-2"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/150",
                objectFit: "cover",
              }}
              width="300"
            />
            <h2 className="text-lg font-semibold">Farming Land in Nagpur, MH</h2>
            <p className="text-green-500 text-lg font-semibold">₹ 5.7 K / month</p>
            <p className="text-gray-600">9,450 sq.ft.</p>
            <div className="flex justify-between items-center mt-2">
              <Link className="text-green-600" href="#">
                See More Details
              </Link>
              <Button className="bg-green-500 text-white">Rent</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent>
            <img
              alt="Farming Land"
              className="w-full h-auto mb-2"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/150",
                objectFit: "cover",
              }}
              width="300"
            />
            <h2 className="text-lg font-semibold">Farming Land in Nagpur, MH</h2>
            <p className="text-green-500 text-lg font-semibold">₹ 5.7 K / month</p>
            <p className="text-gray-600">9,450 sq.ft.</p>
            <div className="flex justify-between items-center mt-2">
              <Link className="text-green-600" href="#">
                See More Details
              </Link>
              <Button className="bg-green-500 text-white">Rent</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent>
            <img
              alt="Farming Land"
              className="w-full h-auto mb-2"
              height="150"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/150",
                objectFit: "cover",
              }}
              width="300"
            />
            <h2 className="text-lg font-semibold">Farming Land in Nagpur, MH</h2>
            <p className="text-green-500 text-lg font-semibold">₹ 5.7 K / month</p>
            <p className="text-gray-600">9,450 sq.ft.</p>
            <div className="flex justify-between items-center mt-2">
              <Link className="text-green-600" href="#">
                See More Details
              </Link>
              <Button className="bg-green-500 text-white">Rent</Button>
            </div>
          </CardContent>
        </Card>
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
