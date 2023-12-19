
import Plow_card from "./plow_card";
import dataBase from "../../../dummy_data.json";
export default function Plow({ slug }: {slug:string }) {
  console.log(slug,"from plow");
  
  const data: any = dataBase[slug as keyof {}];

  if (!data) {
    return (
      <div className="font-bold text-red-500 ml-2">
        Sorry no machines for this city!!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 p-2 gap-4">
      {data.machine_renting_plows.map((Element: any) => (
        <Plow_card key={Element.id} slug={Element} />
      ))}
    </div>
  );
}
