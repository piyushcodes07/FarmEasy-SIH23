

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
          src="https://img.directindustry.com/images_di/photo-g/197275-17109728.jpg"
          style={{
            aspectRatio: "150/150",
            objectFit: "cover",
          }}
          width="150"
        />
        <p className="text-sm mt-2 font-bold text-black">
          30x57 sq.ft. <br /> <span className="text-green-500">$120/day</span>
        </p>
      </div>
      <div className="min-w-[40%]">
        <img
          alt="Warehouse"
          className="rounded-lg"
          height="150"
          src="https://fallingrain.s3.amazonaws.com/uploads/9ea6da06538041d9a67b5ab196c7b30b/medium/cdv_photo_002.jpg"
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
