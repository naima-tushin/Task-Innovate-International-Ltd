"use client"

const Navbar = () => {
    return (
        <nav className="bg-[#363636] text-white py-8 px-24 flex justify-between items-center">
      {/* Navigation Links */}
      <div className="space-x-36 text-lg">
        <a href="#home" className="">
          Home
        </a>
        <a href="#event" className="">
          Event
        </a>
        <a href="#contact" className="">
          Contact
        </a>
        <a href="#blog" className="">
          Blog
        </a>
      </div>

      {/* Search Bar */}
      <div className="flex items-center border-2 bg-white rounded-full w-[298px]">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-[#000000] placeholder-gray-300 py-2 px-4"
        />
      </div>
    </nav>
    );
};

export default Navbar;