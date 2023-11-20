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

const list = [
  {
    img: "/images/logo.png",
    title: "Banana",
    price:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: "/images/logo.png",
    title: "Banana",
    price:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: "/images/logo.png",
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
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={item.img}
              width={40}
            />
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
