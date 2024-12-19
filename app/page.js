import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";
import Categories from "./Components/Categories";
import DuaCard from "./Components/DuaCard";

export default function Home() {
  return (
    <>
      <div className="flex py-10">
        <div>
          <Navbar />
        </div>
        <div className=" w-full">
          <Header />
          <div className="flex">
            <Categories />
            <DuaCard />
          </div>
        </div>
        <div className="w-[450px]">
          <Profile />
          <Settings />
        </div>
      </div>
    </>
  );
}
