import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  
} from "@nextui-org/react";

function ResponseCard() {
  return (
    <Card isBlurred className="py-2 w-full h-full">
      <CardHeader className="pb-0 pt-1 px-4 flex-col items-start">
        <p className="text-black text-tiny uppercase font-bold">Hawayein Unplugged</p>
        <small className=" text-default-200">1 Track</small>
        <h4 className="text-black font-bold text-large">PLAGIARIZED</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/maxresdefault.jpg"
          width={270}
        />
      </CardBody>
    </Card>
    
  );
}

export default ResponseCard;
