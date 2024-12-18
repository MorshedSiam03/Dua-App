import Image from "next/image";

function Profile() {
  return (
    <div className=" flex items-center mr-5 mt-1 justify-end">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className=""
        >
          <div className="w-[55px] rounded-full">
            <img
              alt="Profile"
              src='https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar13-512.png'
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
