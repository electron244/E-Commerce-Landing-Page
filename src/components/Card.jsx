import { FaArrowRightLong } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

import img from "../assets/logo.svg"
const Card = (props) => {
  return (
    <div className="h-[50vh] border-2 m-3 rounded-xl w-[21vw]">
      <div className="h-[65%] flex justify-center items-center rounded-xl">
        <img src={props.image} alt="" className="h-[100%] rounded-xl mix-blend-multiply" />
      </div>
      <hr />
      <div className="p-3 flex flex-col gap-2">
        <h1 className="font-semibold text-xl">{props.title}</h1>
        <h1 className="text-4xl font-bold flex items-center">
          <FaDollarSign />
          {props.price}
        </h1>
        <div className="flex gap-3">
          <a href="">
            <button className="flex items-center gap-3 cursor-pointer bg-[#6a00ff] rounded-full w-35 justify-center text-white h-10 font-semibold">
              Shop Now <FaArrowRightLong />
            </button>
          </a>
          <a href="">
            <button className="flex items-center gap-3 cursor-pointer bg-[#6a00ff] rounded-full w-35 justify-center text-white h-10 font-semibold">
              Add To
              <FaShoppingCart />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
