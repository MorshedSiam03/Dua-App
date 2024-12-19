"use client";
import { useState } from "react";
import Image from "next/image";

function Categories() {
  // State to track which category is open
  const [openCategory, setOpenCategory] = useState(null);
  // State to track which subcategory is open
  const [openSubcategory, setOpenSubcategory] = useState(null);
  // State to track the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data
  const categories = [
    {
      id: 1,
      name: "Adhaan & Iqamah",
      subcategoryCount: 4,
      duaCount: 7,
      subcategories: [
        {
          id: 101,
          title: "Dua while hearing the adhaan",
          items: [
            "Dua while hearing the adhaan #1",
            "Dua while hearing the adhaan #2",
          ],
        },
        {
          id: 102,
          title: "Dua after the adhaan",
          items: ["Dua after the adhaan #1"],
        },
        {
          id: 103,
          title: "Dua between Adhaan and Iqamah",
          items: ["Dua for seeking blessings between Adhaan and Iqamah"],
        },
        {
          id: 104,
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
          id: 201,
          title: "Dua before starting ablution",
          items: ["Bismillah before ablution"],
        },
        {
          id: 202,
          title: "Dua after completing ablution",
          items: ["Ashhadu an la ilaha illallah..."],
        },
        {
          id: 203,
          title: "Dua for purification during bath",
          items: ["Dua for seeking cleanliness and purity"],
        },
      ],
    },
    {
      id: 3,
      name: "Fasting & Ramadan",
      subcategoryCount: 3,
      duaCount: 8,
      subcategories: [
        {
          id: 301,
          title: "Dua for starting a fast",
          items: ["Wa bisawmi ghadin nawaitu..."],
        },
        {
          id: 302,
          title: "Dua for breaking the fast",
          items: ["Allahumma inni laka sumtu..."],
        },
        {
          id: 303,
          title: "Dua for Laylatul Qadr",
          items: ["Allahumma innaka afuwwun..."],
        },
      ],
    },
    {
      id: 4,
      name: "Marriage",
      subcategoryCount: 2,
      duaCount: 4,
      subcategories: [
        {
          id: 401,
          title: "Dua for a successful marriage",
          items: ["Rabbana hablana min azwajina..."],
        },
        {
          id: 402,
          title: "Dua for newlyweds",
          items: ["Barakallahu lakuma..."],
        },
      ],
    },
    {
      id: 5,
      name: "Health & Sickness",
      subcategoryCount: 3,
      duaCount: 7,
      subcategories: [
        {
          id: 501,
          title: "Dua for healing",
          items: ["Allahumma rabban-nas..."],
        },
        {
          id: 502,
          title: "Dua for the sick",
          items: ["As'alullah al-adheem..."],
        },
        {
          id: 503,
          title: "Dua for patience during illness",
          items: ["Inna lillahi wa inna ilayhi raji'un..."],
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
          id: 601,
          title: "Dua before starting a journey",
          items: ["Subhanalladhi sakhkhara lana..."],
        },
        {
          id: 602,
          title: "Dua while traveling",
          items: ["Dua for safety during travel"],
        },
        {
          id: 603,
          title: "Dua upon arriving at a destination",
          items: ["Dua for blessings at the new place"],
        },
        {
          id: 604,
          title: "Dua for returning from a journey",
          items: ["Dua for gratitude upon safe return"],
        },
      ],
    },
    {
      id: 7,
      name: "Death & Funeral",
      subcategoryCount: 3,
      duaCount: 6,
      subcategories: [
        {
          id: 701,
          title: "Dua for the deceased",
          items: ["Allahummaghfir lahu..."],
        },
        {
          id: 702,
          title: "Dua for visiting graves",
          items: ["Assalamu alaikum ahlal quboor..."],
        },
        {
          id: 703,
          title: "Dua for patience during loss",
          items: ["Inna lillahi wa inna ilayhi raji'un..."],
        },
      ],
    },
    {
      id: 8,
      name: "Children & Parenting",
      subcategoryCount: 2,
      duaCount: 5,
      subcategories: [
        {
          id: 801,
          title: "Dua for righteous children",
          items: ["Rabbana hablana min azwajina..."],
        },
        {
          id: 802,
          title: "Dua for protection of children",
          items: ["A'oodhu bikalimatillahi..."],
        },
      ],
    },
    {
      id: 9,
      name: "Rain & Weather",
      subcategoryCount: 2,
      duaCount: 4,
      subcategories: [
        {
          id: 901,
          title: "Dua for rain",
          items: ["Allahumma aghithna..."],
        },
        {
          id: 902,
          title: "Dua during a storm",
          items: ["Allahumma inni as'aluka khayraha..."],
        },
      ],
    },
    {
      id: 10,
      name: "Wealth & Livelihood",
      subcategoryCount: 2,
      duaCount: 5,
      subcategories: [
        {
          id: 1001,
          title: "Dua for sustenance",
          items: ["Rabbana atina fid-dunya hasanah..."],
        },
        {
          id: 1002,
          title: "Dua for blessings in wealth",
          items: ["Allahumma barik lana..."],
        },
      ],
    },
    {
      id: 11,
      name: "Morning & Evening",
      subcategoryCount: 6,
      duaCount: 20,
      subcategories: [
        {
          id: 1101,
          title: "Morning Adhkar",
          items: [
            "Dua for a blessed morning",
            "Dua for protection in the morning",
          ],
        },
        {
          id: 1102,
          title: "Evening Adhkar",
          items: [
            "Dua for a peaceful evening",
            "Dua for protection in the evening",
          ],
        },
      ],
    },
  ];

  // Function to filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Function to toggle the category
  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
    setOpenSubcategory(null); // Reset subcategory when changing category
  };

  // Function to toggle the subcategory
  const toggleSubcategory = (id) => {
    setOpenSubcategory(openSubcategory === id ? null : id);
  };

  return (
    <div>
      <div className="ml-7 mt-5 w-[35vh] bg-white rounded-lg min-h-[82vh] overflow-hidden">
        <div className="bg-[#1fa45b] text-white py-4 text-[16px] text-center">
          Categories
        </div>

        {/* Search Bar */}
        <div className="form-control relative p-4">
          <button
            type="button"
            className="absolute left-0.5 top-1/2 transform p-[12px] pl-6 rounded-md -translate-y-1/2 text-gray-500"
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
          <input
            type="text"
            placeholder="Search Categories"
            className="py-[14px] pl-10 text-md text-black rounded-md text-sm border outline-green-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category List */}
        <div className="space-y-4 p-2 overflow-y-auto max-h-[580px]">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.id} className={`rounded-xl p-1`}>
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
                    <div className="mt-2 p-2 ml-8 border-l-2 border-dotted border-green-500 space-y-2 text-sm text-gray-600">
                      {category.subcategories.map((sub) => (
                        <div key={sub.id}>
                          <p
                            className="text-green-600 ml-[-13px] font-semibold cursor-pointer"
                            onClick={() => toggleSubcategory(sub.id)}
                          >
                            •{" "}
                            <span
                              className={`ml-2 ${
                                openSubcategory === sub.id
                                  ? "text-green-600"
                                  : "text-black"
                              }`}
                            >
                              {sub.title}
                            </span>
                          </p>
                          {openSubcategory === sub.id &&
                            sub.items.length > 0 && (
                              <ul className="list-none space-y-4 items-end ">
                                {sub.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-1 text-[12px] space-y-3 cursor-pointer hover:text-green-600"
                                  >
                                    <span>
                                      <Image
                                        src="https://duaruqyah.com/assets/duaarrow.svg"
                                        width={15}
                                        height={15}
                                        alt="Dua Ruqyah Logo"
                                      />
                                    </span>
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
            ))
          ) : (
            <p className="text-center text-gray-500">No categories found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
