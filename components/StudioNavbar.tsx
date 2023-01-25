import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href={"/"} className="text-primary flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-primary mr-2" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-primary">
          <h1 className="font-bold text-white">Want to create this blog? 👉</h1>
          <Link
            href={"https://portfolio-yosua.vercel.app/"}
            className="text-primary font-bold ml-2"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
