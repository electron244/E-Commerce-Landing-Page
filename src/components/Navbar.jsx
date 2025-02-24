import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-20 items-center h-[10vh]">
        <div className=" text-4xl font-bold flex h-full items-center gap-5">
          <a href="https://www.infinitylinkage.com/">
            <img
              src={Logo}
              alt="No Image"
              className=" logo h-15 cursor-pointer hover:scale-135 duration-300 ease"
            />
          </a>

          <h1>
            Infinity <span className="text-[#6a00ff]">Linkage.</span>
          </h1>
        </div>

        <div>
          <ul className="flex space-x-12 text-xl font-semibold">
            <li className="hover:scale-115 hover:text-[#6a00ff] duration-300 ease cursor-pointer flex flex-col items-center">
              <FaHome />
              Home
            </li>
            <li className="hover:scale-115 hover:text-[#6a00ff] duration-300 ease cursor-pointer flex flex-col items-center">
              <FaShoppingCart />
              Cart
            </li>
            <li className="hover:scale-115 hover:text-[#6a00ff] duration-300 ease cursor-pointer flex flex-col items-center">
              <AiFillProduct />
              Products
            </li>
            <li className="hover:scale-115 hover:text-[#6a00ff] duration-300 ease cursor-pointer flex flex-col items-center">
              <IoMdContact />
              Contact
            </li>
          <li className="hover:scale-115 duration-300 ease cursor-pointer"><button className="bg-[#6a00ff] rounded-full w-30 h-13 text-white text-center hover:bg-[transparent] hover:text-black hover:border-2 border-solid border-[#6a00ff] duration-300 ease">Sign In</button></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
