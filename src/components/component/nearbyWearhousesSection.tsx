import Wearhouse from "./wearhouse";
import dataBase from "../../../dummy_data.json";
export default function NearbyWearhousesSection({ slug }: { slug: string }) {
  console.log(slug, "from nearbyWearhousesSection");

  const dataWearhouse: any = dataBase[slug as keyof {}];

  return (
    <div className="flex overflow-x-auto gap-4 mt-4">
      {dataWearhouse.storage.map((obj: any) => (
        <Wearhouse key={obj.id} data={obj} slug={slug}/>
      ))}
    </div>
  );
}
