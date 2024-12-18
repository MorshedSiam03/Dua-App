import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="flex m-5 items-center justify-between">
        <div className="flex-1">
          <a className="text-2xl text-black">Duas Page</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
