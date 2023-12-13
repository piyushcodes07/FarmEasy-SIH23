

import Wearhouse from "./wearhouse";

export default function NearbyWearhousesSection() {
    


  return (
    <div className="flex overflow-x-auto gap-4 mt-4">
      <Wearhouse />
      <div className="min-w-[40%]">
        <img
          alt="Warehouse"
          className="rounded-lg"
          height="150"
          src="/placeholder.svg"
          style={{
            aspectRatio: "150/150",
            objectFit: "cover",
          }}
          width="150"
        />
        <p className="text-sm mt-2 text-green-700">
          30x57 sq.ft. <br /> $120/day
        </p>
      </div>
      <div className="min-w-[40%]">
        <img
          alt="Warehouse"
          className="rounded-lg"
          height="150"
          src="/placeholder.svg"
          style={{
            aspectRatio: "150/150",
            objectFit: "cover",
          }}
          width="150"
        />
        <p className="text-sm mt-2 text-green-700">
          100x50 sq.ft. <br /> $190/day
        </p>
      </div>
    </div>
  );
}
