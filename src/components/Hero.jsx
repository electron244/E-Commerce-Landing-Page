const Hero = () => {
  return (
    <section
      className="h-[90vh] flex items-center 
    justify-start px-20"
      style={{
        backgroundImage: `url("/bg.avif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-start text-black">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-xl mb-8">
          Discover the best products at unbeatable prices
        </p>
        <a
          href="/shop"
          className="bg-[#6a00ff] text-white py-3 px-6 rounded-full text-[16px] hover:bg-[#9d7cff]"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
