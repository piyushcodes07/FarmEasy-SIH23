
import { Button } from "@/components/ui/button"

export function StorageRequest() {
  return (
    <div key="1" className="max-w-md mx-auto bg-white rounded-lg shadow-md">
      <div className="flex items-center p-4 border-b bg-green-500 border-gray-200">
        <ArrowLeftIcon className="text-gray-600 mr-2" />
        <h1 className="text-xl font-semibold">Storage Request</h1>
      </div>
      <div className="p-4">
        <img
          alt="Storage facility"
          className="w-full h-auto mb-4 rounded"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "400/200",
            objectFit: "cover",
          }}
          width="400"
        />
        <h2 className="text-xl font-semibold mb-2">Spice City Storage, Rajam</h2>
        <div className="mb-6">
          <fieldset className="text-lg font-semibold">
            <legend className="block text-lg font-semibold mb-1">Booking Type</legend>
            <label className="inline-flex items-center mr-4">
              <input className="form-radio" name="bookingType" type="radio" />
              <span className="ml-2">For Now</span>
            </label>
            <label className="inline-flex items-center">
              <input className="form-radio" name="bookingType" type="radio" />
              <span className="ml-2">For Later</span>
            </label>
          </fieldset>
        </div>
        <div className="bg-gray-300 p-2 rounded ">
        <div className="mb-6">
          <h3 className="block text-lg font-semibold mb-1" >
            Product
          </h3>
          <select className="form-select block w-full p-2 rounded-md border border-gray-300" id="productType">
            <option>Type of crop</option>
            <option>Wheat</option>
            <option>Rice</option>
            <option>Corn</option>
          </select>
        </div>
        <div className="mb-6">
          <h3 className="block text-lg font-semibold mb-1">
            Date
          </h3>
          <input
            className="form-input block w-full p-2 rounded-md border border-gray-300"
            id="date"
            type="date"
            value="2023-12-19"
          />
        </div>
        <div className="mb-6">
          <h3 className="block text-lg font-semibold mb-1">
            Quantity in Quintals
          </h3>
          <select className="form-select block w-full p-2 rounded-md border border-gray-300" id="quantity">
            <option>Choose Quantity</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        </div>
        <div className="flex justify-center items-center">
        <Button className="w-[80%] mt-2 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Request
        </Button>
        </div>
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
