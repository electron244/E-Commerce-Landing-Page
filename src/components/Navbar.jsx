const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-20 items-center h-[10vh]">
        <div className="text-[#5b4dff] text-[24px] font-bold">
          Infinity Linkage
        </div>

        <div>
          <ul className="flex space-x-12 text-[12px]">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
