
import Link from 'next/link'


import NearbyWearhousesSection from "@/components/component/nearbyWearhousesSection";
import WeatherComponent from './weatherComponent';

export default async function (props:{params:{slug:string}}) {

  return (
    <div className="max-w-[390px]   mx-auto">
      <WeatherComponent/>
      <div className="mt-1 p-4 bg-green-50">
        <h2 className="text-2xl font-bold text-orange-600">
        Nearby Wearhouses,
        </h2>
        <p className="text-sm font-medium text-gray-600">Storage facilities</p>
        <NearbyWearhousesSection slug={props.params.slug}/>
      </div>
      <div style={{scrollbarWidth:"thin",scrollbarColor:"white",}} className="flex overflow-x-scroll gap-4 shadow-2xl bg-slate-100 p-2 mt-1">
        <Link href={`/city/${props.params.slug}/machineRenting`}  style={{background:"linear-gradient(145.06deg, #BCF7B7 12.99%, rgba(188, 200, 46, 0.364583) 37.83%, #035D2D 91.48%)"}} className="min-w-[40%] rounded-md text-center">
         
          <p className="text-sm mt-2 font-extrabold text-start ml-4 text-back">Machine<br></br> Renting</p>
          <img
            alt="Machine Renting"
            className="mx-auto"
            height="300"
            src="/rent_figma.png"
            style={{
              objectFit: "cover",
            }}
            width="100"
          />
        </Link>
        <Link href={`/city/${props.params.slug}/landRenting`}  style={{background:"linear-gradient(145.06deg, #F7B7ED 12.99%, rgba(200, 46, 194, 0.364583) 37.83%, #55035D 91.48%)"}} className=" min-w-[40%] rounded-md text-center">
            <p className="text-sm mt-2 font-extrabold text-start ml-4 text-back">Land<br></br> Renting</p>
          <img
            alt="land renting"
            className="mx-auto"
            height="500"
            src="/land renting.png"
            style={{
              objectFit: "cover",

            }}
            width="300"
          />
        </Link>
        
        <Link href={`/city/${props.params.slug}/superSupply`} style={{background:"linear-gradient(139deg, #F8D06B 10.05%, rgba(200, 157, 46, 0.36) 35.86%, #746906 91.62%)"}} className="min-w-[40%] text-center rounded-md">
            <p className="text-sm mt-2 font-extrabold text-start ml-4 text-back">FPO<br></br> Super supply</p>
          <img
            alt="Direct Selling"
            className="mx-auto"
            height="300"
            src={`https://s3-alpha-sig.figma.com/img/604f/d3c7/35c3aa2ae94895fd82724be33828d228?Expires=1704067200&Signature=gGrU00ojgLb7vlGOt94g3QF68LHJOZGTXg4KAXw0WruQhc1OhpY2K0lOXHkcETaT~eTXeNI52uGH~P6-0IDVLiRfhpe0WPK0K9q3hHu3UHXTLxUKVWYXYA~UNJPS7Quif3xdeQxW4N9fbK3R2wM-qyMkIaRnWk3dadDaFOlKSlLjf~ReTV6Rr1uBZvI9XlQmFtBeftMWTbrFWz0~DIgURFb8V3D8KYSHW~efbcO9yin0LJgfFby6H8mqE456B-8GR0t0UF3FFzpiCtVOS-1ivC1wv3UF-OwBXOctJOZK1O76TseHZrCnldfxxigAB-46d6iTOiavizatpYL3hFfilQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
            style={{
              objectFit: "cover",
            }}
            width="140"
          />
    
        </Link>
        <div style={{background:"linear-gradient(138.78deg, #F8D06B 10.05%, rgba(200, 157, 46, 0.364583) 35.86%, #746906 91.62%)"}} className="min-w-[40%] text-center rounded-md">
            <p className="text-sm mt-2 font-extrabold text-start ml-4 text-back">Direct Selling</p>
          <img
            alt="Direct Selling"
            className="mx-auto"
            height="300"
            src="/direct_selling.png"
            style={{
              objectFit: "cover",
            }}
            width="120"
          />
        </div>
        
       
      </div>
    </div>
  );
}



