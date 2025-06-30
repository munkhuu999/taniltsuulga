import React from "react";
import Image from "next/image";
export default function HeaderComponent() {
  return (
    <div>
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
    </div>
  );
}
