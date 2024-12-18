import Image from "next/image";

function Settings() {
  return (
    <div className=" bg-white mx-3 mt-4 h-[82vh] rounded-3xl p-4">
      {/* Title */}
      <h2 className="text-center text-xl text-black my-7">Settings</h2>

      {/* Tabs */}
      <div> 
        <div className=" border  rounded-lg mb-4">
          <div className="border-l-4 border-green-500 bg-[#f7f8fa] rounded-r-lg h-12 py-1 pl-2 mb-4">
            <h3 className="text-green-600 text-sm font-semibold flex items-center">
              <span className="mr-2  bg-[#e8f0f5] p-2 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5H15H3ZM9 3V5V3ZM10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9L10.048 14.5ZM12.5 18H19.5H12.5ZM11 21L16 11L21 21H11Z"
                    stroke="#1fa45b"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>{" "}
              Language Settings
            </h3>
          </div>

          {/* Language Buttons */}
          <div className="flex gap-2 text-sm mt-6 mb-5 px-4">
            <button className="flex-1 bg-green-600 text-white  py-2 rounded-md">
              English
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700  py-2 rounded-md">
              বাংলা
            </button>
          </div>
        </div>

        {/* Other Settings */}
        <div className="space-y-4">
          <div className="flex items-center text-gray-500 cursor-pointer bg-[#f7f8fa] p-2 rounded-lg">
            <span className="mr-2 bg-[#e8f0f5] p-2 rounded-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5H15M17 9H3H17ZM17 9C17.5304 9 18.0391 9.21071 18.4142 9.58579C18.7893 9.96086 19 10.4696 19 11V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V11C1 10.4696 1.21071 9.96086 1.58579 9.58579C1.96086 9.21071 2.46957 9 3 9H17ZM17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5L17 9ZM3 9V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5L3 9ZM5 5V3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V5H5Z"
                  stroke="#868686"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p>General Settings</p>
          </div>
          <div className="flex items-center text-gray-500 cursor-pointer bg-[#f7f8fa] p-2 rounded-lg">
            <span className="mr-2  bg-[#e8f0f5] p-2 rounded-full">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.25H5C3.75736 3.25 2.75 4.25736 2.75 5.5V8.5C2.75 9.74264 3.75736 10.75 5 10.75H8C9.24264 10.75 10.25 9.74264 10.25 8.5V5.5C10.25 4.25736 9.24264 3.25 8 3.25Z"
                  stroke="#868686"
                  stroke-width="1.5"
                />
                <path
                  d="M19 3.25H16C14.7574 3.25 13.75 4.25736 13.75 5.5V8.5C13.75 9.74264 14.7574 10.75 16 10.75H19C20.2426 10.75 21.25 9.74264 21.25 8.5V5.5C21.25 4.25736 20.2426 3.25 19 3.25Z"
                  stroke="#868686"
                  stroke-width="1.5"
                />
                <path
                  d="M19 14.25H16C14.7574 14.25 13.75 15.2574 13.75 16.5V19.5C13.75 20.7426 14.7574 21.75 16 21.75H19C20.2426 21.75 21.25 20.7426 21.25 19.5V16.5C21.25 15.2574 20.2426 14.25 19 14.25Z"
                  stroke="#868686"
                  stroke-width="1.5"
                />
                <path
                  d="M8 14.25H5C3.75736 14.25 2.75 15.2574 2.75 16.5V19.5C2.75 20.7426 3.75736 21.75 5 21.75H8C9.24264 21.75 10.25 20.7426 10.25 19.5V16.5C10.25 15.2574 9.24264 14.25 8 14.25Z"
                  stroke="#868686"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <p>Font Settings</p>
          </div>
          <div className="flex items-center text-gray-500 cursor-pointer bg-[#f7f8fa] p-2 rounded-lg">
            <span className="mr-2  bg-[#e8f0f5] p-2 rounded-full">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.25H5C3.75736 3.25 2.75 4.25736 2.75 5.5V8.5C2.75 9.74264 3.75736 10.75 5 10.75H8C9.24264 10.75 10.25 9.74264 10.25 8.5V5.5C10.25 4.25736 9.24264 3.25 8 3.25Z"
                  stroke="#868686"
                  stroke-width="1.5"
                />
                <path
                  d="M19 3.25H16C14.7574 3.25 13.75 4.25736 13.75 5.5V8.5C13.75 9.74264 14.7574 10.75 16 10.75H19C20.2426 10.75 21.25 9.74264 21.25 8.5V5.5C21.25 4.25736 20.2426 3.25 19 3.25Z"
                  stroke="#868686"
                  stroke-width="1.5"
                />
                <path
                  d="M19 14.25H16C14.7574 14.25 13.75 15.2574 13.75 16.5V19.5C13.75 20.7426 14.7574 21.75 16 21.75H19C20.2426 21.75 21.25 20.7426 21.25 19.5V16.5C21.25 15.2574 20.2426 14.25 19 14.25Z"
                  stroke="#868686"
                  stroke-width="1.5"
                />
                <path
                  d="M8 14.25H5C3.75736 14.25 2.75 15.2574 2.75 16.5V19.5C2.75 20.7426 3.75736 21.75 5 21.75H8C9.24264 21.75 10.25 20.7426 10.25 19.5V16.5C10.25 15.2574 9.24264 14.25 8 14.25Z"
                  stroke="#868686"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <p>Appearance Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
