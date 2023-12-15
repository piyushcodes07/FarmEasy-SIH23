

import dataBase from "../../../dummy_data.json";
import Sprayer_card from "./sprayer_card";
export default function Sprayers({ slug }: {slug:string }) {
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
      {data.machine_renting_sprayer.map((Element: any) => (
        <Sprayer_card slug={Element} />
      ))}
    </div>
  );
}
