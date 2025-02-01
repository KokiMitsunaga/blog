import Link from "next/link";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-green w-screen h-[30vh] flex items-center justify-center space-x-7">
      <Link href="https://twitter.com/deg_legacy" target="_blank">
        <FaXTwitter color="white" size={25} />
      </Link>
      <Link
        href="https://www.instagram.com/legacy.webprod/?next=%2F"
        target="_blank"
      >
        <FaInstagram color="white" size={25} />
      </Link>
      <Link
        href="https://m.facebook.com/profile.php?eav=AfapKVwUC86GiTVL9-Ct5UevRYzhU7vGNZ_SDvSpKkRIGkpbH67zX3Jy0TOHfwtGcv4&paipv=0"
        target="_blank"
      >
        <FaFacebook color="white" size={25} />
      </Link>
    </div>
  );
};

export default Footer;
