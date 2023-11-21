'use client'
import Navigation from "@/components/Navigation";
import DragDrop from "../../../components/DragDrop";
import Response from "../../../components/Response";
import backgroundImage from "../../../public/beams-pricing.png";

function LogPage() {
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
        <div className="grid grid-rows-2 align-middle items-center flex-col pb-20 justify-items-center space-y-10 text-center">
          
          <div className="">
            <Response />
          </div>
          <div>
            <DragDrop />
          </div>
        </div>
      </div>
    </div>
        
    )
}

export default LogPage;