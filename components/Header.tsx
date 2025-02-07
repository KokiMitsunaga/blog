import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-screen bg-green p-10">
      <Link href={"/"}>
        <Image
          aria-hidden
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
};

export default Header;
