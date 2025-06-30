import React from "react";
import Image from "next/image";
export default function HeaderComponent() {
  return (
    <div className="row">
      <div className="col-12 text-center">
        <Image
          src="/zurag/icon1.webp"
          alt="logo"
          width={1500}
          height={250}
          className="img-fluid d-block mx-auto img-lg-height-100"
        />
      </div>
    </div>
  );
}
