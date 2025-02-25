import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <section
      className="h-[90vh] flex items-center 
    justify-center px-20"
      style={{
        backgroundImage: `url("./bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-start text-black flex flex-col items-center"  id="hero">
        <h1 className="text-5xl font-bold mb-4"><span className="text-[#6a00ff]">Welcome!</span> to Our Store</h1>
        <p className="text-xl mb-8">
          Discover the best products at unbeatable prices.
        </p>
        <a
          href="#products"
          className="w-full flex justify-center"
        >
          <button className="hover:bg-[#9d7cff] hover:scale-110 w-1/2 bg-[#6a00ff] rounded-full h-13 text-white cursor-pointer duration-300 ease font-semibold text-xl flex justify-center items-center gap-2">Shop Now <FaArrowRightLong /></button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
