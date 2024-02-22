import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" py-3 green-dotted-bg-white w-full flex justify-between px-3 text-white items-center">
      <span className=" poppins-extrabold">Ashesi iGEM 2024</span>
      <div className=" flex flex-row gap-2 text-2xl">
        <FaSquareInstagram />
        <FaLinkedin />
        <FaSquareXTwitter />
      </div>
      <span>Email: igem@ashesi.edu.gh</span>
    </footer>
  );
}

export default Footer;
