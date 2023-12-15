"use client";
import { useSearchParams } from "next/navigation";
import dataBase from "../../../../../../dummy_data.json";
import { FinalRentPage } from "@/components/component/final-rent-page";

export default function BookEquipment(props: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const equipmentType = searchParams.get("equipment");
  const id = searchParams.get("id");

  const slug = props.params.slug;
  var data: any = dataBase[slug as keyof {}];

  if (!data) {
    return (
      <div className="font-bold text-red-500 ml-2">
        Sorry no machines for this city!!
      </div>
    );
  }

  if (equipmentType === "tractor") {
    data = dataBase[slug as keyof {}];
    data = data.machine_renting_tractors.find(
      (element: any) => id == element.id
    );
    console.log(data);
  } else if (equipmentType == "plow") {
    data = dataBase[slug as keyof {}];
    data = data.machine_renting_plows.find((element: any) => id == element.id);
    console.log(data);
  } else if (equipmentType == "sprayer") {
    data = dataBase[slug as keyof {}];
    data = data.machine_renting_sprayer.find(
      (element: any) => id == element.id
    );
    console.log(data);
  }

  return (
    <div className="max-w-sm  mx-auto">
      <FinalRentPage slug={data} />
    </div>
  );
}
