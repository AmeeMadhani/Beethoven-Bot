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
import { GoLaw } from "react-icons/go";
import { IoFootsteps } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";



const list = [
  {
    img: <GoLaw style={{ color: '#EC4899',fontSize: '30px' }}/>,
    title: "Step 1",
    price:
      "Find a song that you think is plagiarized.",
  },
  {
    img: <IoFootsteps style={{ color: '#EC4899',fontSize: '30px' }} />,
    title: "Step 2",
    price:
      "Drag and drop the song into the box below.",
  },
  {
    img: <HiLightBulb style={{ color: '#EC4899',fontSize: '30px' }} />,

    title: "Step 3",
    price:
      "We will tell you if the song is plagiarized or not.",
  },
];

function Cards() {
  return (
    <div className="gap-8 grid grid-cols-1 sm:grid-cols-3 ">
      {list.map((item, index) => (
        <Card className="max-w-[400px] light" key={index} isBlurred>
          <CardHeader className="flex gap-3">
            {/* <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={item.img}
              width={40}
            /> */}
            <div>{item.img}</div>
            <div className="flex flex-col">
              <p className="text-md">{item.title}</p>
              {/* <p className="text-small text-default-500">nextui.org</p> */}
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{item.price}</p>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
