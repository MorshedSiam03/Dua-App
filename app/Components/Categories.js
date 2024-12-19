"use client"
import { useState } from "react";

function Categories() {
  // State to track which category is open
  const [openCategory, setOpenCategory] = useState(null);

  // Sample data
  const categories = [
    {
      id: 1,
      name: "Adhaan & Iqamah",
      subcategoryCount: 4,
      duaCount: 7,
      subcategories: [
        {
          title: "Dua while hearing the adhaan",
          items: ["Dua while hearing the adhaan #1", "Dua while hearing the adhaan #2"],
        },
        { title: "Dua after the adhaan", items: [] },
        { title: "Dua between Adhaan and Iqamah", items: [] },
        { title: "Dua for Imam and Mu'adhdhin", items: [] },
      ],
    },
    {
      id: 2,
      name: "Ablution & Bath",
      subcategoryCount: 2,
      duaCount: 4,
      subcategories: [],
    },
    {
      id: 3,
      name: "Mosque",
      subcategoryCount: 5,
      duaCount: 13,
      subcategories: [],
    },
    {
      id: 4,
      name: "Salah",
      subcategoryCount: 17,
      duaCount: 102,
      subcategories: [],
    },
  ];

  // Function to toggle the category
  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div className="">
      {/* Main Container */}
      <div className="ml-7 mt-5 w-[35vh] bg-white rounded-lg min-h-[82vh] overflow-hidden">
        {/* Header */}
        <div className="bg-[#1fa45b] text-white py-4 text-[16px] text-center">
          Categories
        </div>

        {/* Search Bar */}
        <div className="form-control relative p-4">
        <button
              type="button"
              className="absolute left-0.5 top-1/2 transform p-[12px] pl-6 rounded-md  -translate-y-1/2 text-gray-500"
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search Categories"
              className=" py-[14px] pl-10 text-md text-black rounded-md text-sm border outline-green-600"
            />
            
          </div>

        {/* Category List */}
        <div className="space-y-4 p-2 overflow-y-auto max-h-[500px]">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${
                openCategory === category.id ? "bg-gray-100" : "bg-white"
              } rounded-lg p-3 shadow-sm`}
            >
              {/* Category Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCategory(category.id)}
              >
                <div>
                  <h3 className="font-semibold text-gray-700">{category.name}</h3>
                  <p className="text-xs text-gray-500">
                    Subcategory: {category.subcategoryCount}
                  </p>
                </div>
                <span className="text-green-600 font-bold">{category.duaCount}</span>
              </div>

              {/* Subcategories (Collapsible Section) */}
              {openCategory === category.id && category.subcategories.length > 0 && (
                <div className="mt-2 space-y-2 text-sm text-gray-600">
                  {category.subcategories.map((sub, index) => (
                    <div key={index}>
                      <p className="text-green-500 font-semibold">{sub.title}</p>
                      {sub.items.length > 0 && (
                        <ul className="list-none pl-5 border-l-2 border-dotted border-green-500 space-y-1">
                          {sub.items.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <span>🔹</span>
                              <p>{item}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
