export default function Wearhouse(){
    return(
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
              40x50 sq.ft. <br /> $piyush/day
            </p>
          </div>
    )
}