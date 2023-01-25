import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        src="https://links.papareact.com/1m8"
        className="rounded-full object-cover"
        alt="logo"
        width={50}
        height={50}
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
