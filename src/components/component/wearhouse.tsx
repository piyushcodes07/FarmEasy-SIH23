import Link from "next/link";
import PageUnderDevelopment from "./pageUnderDevelopment";

export default function Wearhouse(props:any){
  console.log(props);
  
    return(
      <Link className="min-w-[40%]" href={`/city/${props.slug}/storage?id=${props.data.id}`}>
        <div className="">

            <img
              alt="Warehouse"
              className="rounded-lg"
              height="150"
              src={props.data.mainImage}
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <p className="block text-sm font-semibold mt-1">{props.data.name}</p>
            <span className="block text-green-500 text-sm font-semibold">₹ {(props.data.price *100)}/day</span>
            <p className="text-sm mt-0 text-black text-[11px]">
            {props.data.area} sq.ft. 
            </p>
          </div>
          </Link>
    )
}