import Image from "next/image";
import support from '@/images/I want to support.png'

function Navbar() {


  return (
    <div className="flex flex-col min-h-[90vh] w-24 justify-between items-center bg-white px-4 py-10 rounded-2xl ml-10 ">
      {/* Logo Section */}
      <div>
        <Image
          src="https://duaruqyah.com/assets/dua-logo.svg"
          width={50}
          height={50}
          alt="Dua Ruqyah Logo"
        />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col justify-between space-y-5 ">
        <div className=" bg-[#e8f0f5] p-3 rounded-full hover:scale-110 transition-transform">
          <Image
            src="https://duaruqyah.com/assets/nav/home.svg"
            width={20}
            height={20}
            alt="Dua Ruqyah Logo"
          />
        </div>
        <div className=" bg-[#e8f0f5] p-3 rounded-full hover:scale-110 transition-transform">
          <Image
            src="https://duaruqyah.com/assets/nav/alldua.svg"
            width={20}
            height={20}
            alt="Dua Ruqyah Logo"
          />
        </div>
        <div className=" bg-[#e8f0f5] p-3 rounded-full hover:scale-110 transition-transform">
          <Image
            src="https://duaruqyah.com/assets/nav/memorize.svg"
            width={20}
            height={20}
            alt="Dua Ruqyah Logo"
          />
        </div>
        <div className=" bg-[#e8f0f5] p-3 rounded-full hover:scale-110 transition-transform">
          <Image
            src="https://duaruqyah.com/assets/nav/bookmark.svg"
            width={20}
            height={20}
            alt="Dua Ruqyah Logo"
          />
        </div>
        <div className=" bg-[#e8f0f5] p-3 rounded-full hover:scale-110 transition-transform">
          <Image
            src="https://duaruqyah.com/assets/nav/ruqyah.svg"
            width={20}
            height={20}
            alt="Dua Ruqyah Logo"
          />
        </div>
        <div className=" bg-[#e8f0f5] p-3 rounded-full hover:scale-110 transition-transform">
          <Image
            src="https://duaruqyah.com/assets/nav/dua-info.svg"
            width={20}
            height={20}
            alt="Dua Ruqyah Logo"
          />
        </div>
        <div className=" bg-[#e8f0f5] p-3 rounded-full hover:scale-110 transition-transform">
          <Image
            src="https://duaruqyah.com/assets/nav/books.svg"
            width={20}
            height={20}
            alt="Dua Ruqyah Logo"
          />
        </div>
      </div>

      {/* Footer Logo Section */}
      <div>
        <Image
          src={support}
          width={55}
          height={55}
          alt="Support"
        />
      </div>
    </div>
  );
}

export default Navbar;
