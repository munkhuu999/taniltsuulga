import React from "react";
import Image from "next/image";

interface propsType {
  imgurl: string;
}
export default function ImageBox({ imgurl }: propsType) {
  return (
    <Image
      style={{ height: "500px", borderRadius: "10px", objectFit: "cover" }}
      src={imgurl}
      width={500}
      height={500}
      alt="logo"
    />
  );
}
