import Link from "next/link";
import PageUnderDevelopment from "./pageUnderDevelopment";

export default function Wearhouse(){
    return(
      <Link className="min-w-[40%]" href={"/underDevelopment"}>
        <div className="">

            <img
              alt="Warehouse"
              className="rounded-lg"
              height="150"
              src="https://img.directindustry.com/images_di/photo-mg/197275-17109735.jpg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p className="block text-sm font-semibold mt-1">Rajam Reserves 23</p>
            <span className="block text-green-500 text-sm font-semibold">₹ 300/day</span>
            <p className="text-sm mt-0 text-black text-[11px]">
            40x50 sq.ft. 
            </p>
          </div>
          </Link>
    )
}