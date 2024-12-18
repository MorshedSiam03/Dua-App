import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Profile from "./Components/Profile";

export default function Home() {
  return (
    <>
      <div className="flex py-10">
        <div>
        <Navbar />
        </div>
        <div className=" w-full">
            <Header/>
        </div>
        <div className="w-80">
          <Profile/>
        </div>
      </div>
    </>
  );
}
