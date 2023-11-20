// import Image from 'next/image';
import DragDrop from "@/components/DragDrop";
import backgroundImage from "../public/beams-pricing.png";
import Navigation from "@/components/Navigation";
import Cards from "@/components/Card";

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
          backgroundPosition: "auto",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="grid grid-rows-2 align-middle items-center flex-col justify-items-center space-y-10 text-center">
          <div className="">
            <h1 className=" font-comfortaa sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-500">
              Beethoven Bot
            </h1>
            <h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400">
              Detecting plagiarism in music using machine learning{" "}
            </h3>
          </div>
          <div className="">
            <Cards />
          </div>
          <div>
            <DragDrop />
          </div>
        </div>
      </div>
    </div>
  );
}
