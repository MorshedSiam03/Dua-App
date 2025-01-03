import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="flex ml-8 mt-1 mr-5 items-center justify-between">
        <div className="flex-1">
          <a className="text-2xl text-black">Duas Page</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control relative">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="w-[360px] py-[14px] text-black pl-5 text-md rounded-md text-sm outline-green-600"
            />
            <button
              type="button"
              className="absolute right-0.5 top-1/2 transform p-[12px] px-5 rounded-md bg-[#f3f4f6] -translate-y-1/2 text-gray-500 "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
