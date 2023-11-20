// import Image from 'next/image';
import DragDrop from "@/components/DragDrop";
import backgroundImage from "../public/beams-pricing.png";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className=" bg-white">
      <Navigation />
      <div
        className=""
        style={{
          // use the src property of the image object
          backgroundImage: `url(${backgroundImage.src})`,
          // other styles
          backgroundPosition: "cover",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div>
            <DragDrop />
          </div>
        </div>
      </div>
    </div>
  );
}
