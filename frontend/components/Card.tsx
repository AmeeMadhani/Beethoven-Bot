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
    title: "Banana",
    price:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: <IoFootsteps style={{ color: '#EC4899',fontSize: '30px' }} />,
    title: "Banana",
    price:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: <HiLightBulb style={{ color: '#EC4899',fontSize: '40px' }} />,

    title: "Banana",
    price:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
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
              <p className="text-small text-default-500">nextui.org</p>
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
