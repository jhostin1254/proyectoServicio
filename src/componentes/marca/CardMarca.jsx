import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "react-bootstrap/Image";

export function CardMarca({ dmarca, imagen }) {
  const imageRefactor = imagen
    ? `src/assets/${imagen}.jpg`
    : `src/assets/noImage.png`;

  return (
    <Card className="py-4 w-36 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-bold text-large">{dmarca}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image src={imageRefactor} rounded />
      </CardBody>
    </Card>
  );
}
