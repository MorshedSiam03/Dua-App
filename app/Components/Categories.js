"use client";
import { useState } from "react";
import Image from "next/image";

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
          items: [
            "Dua while hearing the adhaan #1",
            "Dua while hearing the adhaan #2",
          ],
        },
        { title: "Dua after the adhaan", items: ["Dua after the adhaan #1"] },
        {
          title: "Dua between Adhaan and Iqamah",
          items: ["Dua for seeking blessings between Adhaan and Iqamah"],
        },
        {
          title: "Dua for Imam and Mu'adhdhin",
          items: ["Dua for the Imam's guidance", "Dua for Mu'adhdhin's reward"],
        },
      ],
    },
    {
      id: 2,
      name: "Ablution & Bath",
      subcategoryCount: 3,
      duaCount: 6,
      subcategories: [
        {
          title: "Dua before starting ablution",
          items: ["Bismillah before ablution"],
        },
        {
          title: "Dua after completing ablution",
          items: ["Ashhadu an la ilaha illallah..."],
        },
        {
          title: "Dua for purification during bath",
          items: ["Dua for seeking cleanliness and purity"],
        },
      ],
    },
    {
      id: 3,
      name: "Mosque",
      subcategoryCount: 5,
      duaCount: 13,
      subcategories: [
        {
          title: "Dua while entering the mosque",
          items: ["Allahumma iftah li abwaba rahmatika"],
        },
        {
          title: "Dua while exiting the mosque",
          items: ["Allahumma inni as'aluka min fadhlika"],
        },
        {
          title: "Dua for the mosque's prosperity",
          items: ["Dua for blessings upon the mosque"],
        },
        {
          title: "Dua for cleanliness of the mosque",
          items: ["Dua for maintaining purity in the mosque"],
        },
        {
          title: "Dua before sitting in the mosque",
          items: ["Dua for seeking Allah's blessings while seated"],
        },
      ],
    },
    {
      id: 4,
      name: "Salah",
      subcategoryCount: 17,
      duaCount: 102,
      subcategories: [
        {
          title: "Dua before starting Salah",
          items: ["Subhanaka Allahumma wa bihamdika..."],
        },
        {
          title: "Dua in Ruku",
          items: ["Subhana Rabbiyal Adheem"],
        },
        {
          title: "Dua in Sujood",
          items: ["Subhana Rabbiyal A'la"],
        },
        {
          title: "Dua between two Sujood",
          items: ["Rabbighfir li, warhamni..."],
        },
        {
          title: "Dua in Tashahhud",
          items: ["At-tahiyyatu lillahi..."],
        },
        {
          title: "Dua after Salah",
          items: ["Allahumma antas-Salam wa minkas-Salam..."],
        },
        {
          title: "Dua for forgiveness in Salah",
          items: ["Dua for seeking forgiveness during prayer"],
        },
        {
          title: "Dua for acceptance of Salah",
          items: ["Rabbana taqabbal minna..."],
        },
        {
          title: "Dua for concentration in Salah",
          items: ["Dua for focus and devotion during prayer"],
        },
      ],
    },
    {
      id: 5,
      name: "Morning & Evening",
      subcategoryCount: 6,
      duaCount: 20,
      subcategories: [
        {
          title: "Morning Adhkar",
          items: [
            "Dua for a blessed morning",
            "Dua for protection in the morning",
          ],
        },
        {
          title: "Evening Adhkar",
          items: [
            "Dua for a peaceful evening",
            "Dua for protection in the evening",
          ],
        },
        {
          title: "Dua for gratitude in the morning",
          items: ["Alhamdulillah for a new day"],
        },
        {
          title: "Dua for safety throughout the day",
          items: ["Dua for seeking Allah's protection during the day"],
        },
        {
          title: "Dua for sleep at night",
          items: ["Allahumma bismika amutu wa ahya"],
        },
      ],
    },
    {
      id: 6,
      name: "Travel",
      subcategoryCount: 4,
      duaCount: 10,
      subcategories: [
        {
          title: "Dua before starting a journey",
          items: ["Subhanalladhi sakhkhara lana..."],
        },
        {
          title: "Dua while traveling",
          items: ["Dua for safety during travel"],
        },
        {
          title: "Dua upon arriving at a destination",
          items: ["Dua for blessings at the new place"],
        },
        {
          title: "Dua for returning from a journey",
          items: ["Dua for gratitude upon safe return"],
        },
      ],
    },
    {
      id: 7,
      name: "Food & Drink",
      subcategoryCount: 3,
      duaCount: 8,
      subcategories: [
        {
          title: "Dua before eating",
          items: ["Bismillah wa barakatillah"],
        },
        {
          title: "Dua after eating",
          items: ["Alhamdulillahilladhi atamana..."],
        },
        {
          title: "Dua for hosting a meal",
          items: ["Dua for blessings upon the host"],
        },
      ],
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
        <div className="space-y-4 p-2 overflow-y-auto max-h-[580px]">
          {categories.map((category) => (
            <div
              key={category.id}
              className={` rounded-xl p-1`}
            >
              {/* Category Header */}
              <div
                className={`${
                    openCategory === category.id ? "bg-[#e8f0f5]" : "bg-white"
                  } flex justify-between items-center cursor-pointer p-3 rounded-lg`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex gap-2">
                  <div>
                    <Image
                      src="https://duaruqyah.com/assets/icon/duar_gurutto.svg"
                      className="bg-[#f7f8fa] p-2 rounded-md"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Subcategory: {category.subcategoryCount}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l pl-4">
                  <p className="text-black text-lg ">{category.duaCount}</p>
                  <p className="text-[12px] text-black">Duas</p>
                </div>
              </div>

              {/* Subcategories (Collapsible Section) */}
              {openCategory === category.id &&
                category.subcategories.length > 0 && (
                  <div className="mt-2 px-3 space-y-2 text-sm text-gray-600">
                    {category.subcategories.map((sub, index) => (
                      <div key={index}>
                        <p className="text-green-500 font-semibold">
                          {sub.title}
                        </p>
                        {sub.items.length > 0 && (
                          <ul className="list-none pl-5 border-l-2 border-dotted border-green-500 space-y-1">
                            {sub.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center space-x-2"
                              >
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
