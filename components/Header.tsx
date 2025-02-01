import Image from "next/image";

const Header = () => {
  return (
    <div className="w-screen bg-green p-10">
      <Image aria-hidden src="/logo.svg" alt="Logo" width={100} height={100} />
    </div>
  );
};

export default Header;
