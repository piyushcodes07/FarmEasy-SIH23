import Image from "next/image";
import AutoComplete from "./autocomplete";

export default function LandingLocation() {
  return (
    <div>
      <div
        className="flex flex-col gap-2 items-center justify-center "
        style={{
          // backgroundImage: `url("")`,
          backgroundColor: "#03989E",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <Image
            className="mb-10"
            src="/logo.png"
            alt="me"
            width="100"
            height="100"
          />
        </div>

        <div>
            <AutoComplete/>
        </div>

      </div>
    </div>
  );
}
