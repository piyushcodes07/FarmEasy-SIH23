
'use client'
import { useRouter } from "next/navigation"
export function SuperSupplyFirst() {
  const router = useRouter()
  return (
    <div className="bg-white p-0 ">
      <div className="bg-green-500 mb-3 text-white p-4 flex items-center justify-between">
        <ArrowLeftIcon onClick={()=>router.back()} className="text-white h-6 w-6" />
        <h1 className="text-xl font-bold">Super Supply</h1>
        {/* <MicroscopeIcon className="text-white h-6 w-6" /> */}
      </div>
      <h1 className="text-center text-2xl font-bold mb-6">Select Crop</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <img
            alt="Ground Nut"
            className="rounded-full mb-2 bg-blue-200"
            height="150"
            src="https://pngfre.com/wp-content/uploads/Peanut-30-1024x664.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",

            }}
            width="150"
          />
            <input className="h-[15px] w-[15px]" type="checkbox" id="ground_nut" name="ground_nut" value="1"></input>
          <span className="bold font-medium ">Ground Nut</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            alt="Ground Nut"
            className="rounded-full mb-2 bg-blue-200"
            height="150"
            src="https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",

            }}
            width="150"
          />
            <input className="h-[15px] w-[15px]" type="checkbox" id="ground_nut" name="ground_nut" value="1"></input>

          <span className="bold font-medium ">Tomato</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            alt="Ground Nut"
            className="rounded-full mb-2 bg-blue-200"
            height="150"
            src="https://w7.pngwing.com/pngs/955/492/png-transparent-banana-powder-fruit-cavendish-banana-banana-yellow-banana-fruit-food-image-file-formats-banana-leaves-thumbnail.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",

            }}
            width="150"
          />
            <input className="h-[15px] w-[15px]" type="checkbox" id="ground_nut" name="ground_nut" value="1"></input>

          <span className="bold font-medium ">Banana</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            alt="Ground Nut"
            className="rounded-full mb-2 bg-blue-200"
            height="150"
            src="https://w7.pngwing.com/pngs/359/1011/png-transparent-coffee-beans-coffee-bean-cafe-coffee-beans-food-coffee-cocoa-bean.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",

            }}
            width="150"
          />
            <input className="h-[15px] w-[15px]" type="checkbox" id="ground_nut" name="ground_nut" value="1"></input>

          <span className="bold font-medium ">Coffee Beans</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            alt="Ground Nut"
            className="rounded-full mb-2 bg-blue-200"
            height="150"
            src="https://w7.pngwing.com/pngs/187/615/png-transparent-orange-fruit-orange-tangerine-orange-natural-foods-food-citrus.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",

            }}
            width="150"
          />
            <input className="h-[15px] w-[15px]" type="checkbox" id="ground_nut" name="ground_nut" value="1"></input>

          <span className="bold font-medium ">Orage</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            alt="Grapes"
            className="rounded-full mb-2"
            height="150"
            src="https://w7.pngwing.com/pngs/997/412/png-transparent-bunch-of-white-grapes-muscat-wine-juice-concord-grape-grape-natural-foods-food-wine.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="150"
          />
            <input className="h-[15px] w-[15px]" type="checkbox" id="ground_nut" name="ground_nut" value="1"></input>

          <span>Grapes</span>
          
          </div>
         
      </div>
      <div className="flex justify-center  mt-4 items-center w-full">
            <button className="px-12  py-2 text-white font-bold rounded bg-green-500 ">
              Proceed
            </button>
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
