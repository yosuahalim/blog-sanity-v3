import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <Image
            className="rounded-full"
            width={50}
            height={50}
            alt="logo"
            src={"https://links.papareact.com/1m8"}
          />
        </Link>
        <h1>YOSUA</h1>
      </div>
      <div>
        <Link
          href={"https://portfolio-yosua.vercel.app/"}
          target="_blank"
          className="px-5 py-3 md:text-base bg-gray-900 text-primary flex items-center rounded-full text-center"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
