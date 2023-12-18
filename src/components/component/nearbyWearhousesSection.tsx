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
        <p className="block text-sm font-semibold mt-1">Spice Storage
</p>
        <span className="block text-green-500 text-sm font-semibold">
          ₹ 430/day
        </span>
        <p className="text-sm mt-0 text-black text-[11px]">50x70 sq.ft.</p>
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
                  <p className="block text-sm font-semibold mt-1">Depot Rajam</p>
            <span className="block text-green-500 text-sm font-semibold">₹ 520/day</span>
            <p className="text-sm mt-0 text-black text-[11px]">
            70x50 sq.ft. 
            </p>
      </div>
    </div>
  );
}
