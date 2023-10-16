import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import headerMenuImage from "./assets/menuheader.png";
import footerImage from "./assets/footer.png";
import heroImage from "./assets/heroheader.png";
import headerSectionImg from "./assets/headersection.png";
import CtaImage from "./assets/cta.png";
import contactImg from "./assets/contact.png";
import testImg from "./assets/testtest.png";
import imgTest from "./assets/secondMenu.png";
import imgtestOne from "./assets/testone.png";
import libraries from "./assets/libraries.png";
import chromeImg from "./assets/chrome.png";
function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [dropDown, setDropdown] = useState("");
  const tabData = [
    {
      id: 1,
      label: "Marketing",
      badge: true,
    },
    { id: 2, label: "Ecommerce", badge: false },
    { id: 3, label: "Application ", badge: true },
  ];
  const tabArrayData = [
    {
      img: headerMenuImage,
      name: "Navbars",
      value: 22,
    },
    { img: footerImage, name: "Footers", value: 11 },
    { img: heroImage, name: "Hero Header", value: 76 },
    { img: headerSectionImg, name: "Hero Header Sections", value: 414 },
    { img: CtaImage, name: "CTA Sections", value: 36 },
    { img: contactImg, name: "Contact Section", value: 16 },
    { img: heroImage, name: "Pricing Section", value: 16 },
    { img: heroImage, name: "Testimonial Section", value: 6 },
    { img: heroImage, name: "Faq Section", value: 7 },
  ];
  return (
    <nav class="bg-slate-100 border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="https://flowbite.com" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Shahiq
          </span>
        </a>
        <div class="flex items-center md:order-2">
          <a
            href="#"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Login
          </a>
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign up
          </a>
          <button
            data-collapse-toggle="mega-menu"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          id="mega-menu"
          className="items-center justify-between  w-full md:flex md:w-auto md:order-1"
        >
          <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <button
                id="mega-menu-icons-dropdown-button"
                data-dropdown-toggle="mega-menu-icons-dropdown"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() =>
                  setDropdown((prev) => (prev === "company" ? "" : "company"))
                }
              >
                Features
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {dropDown === "company" && (
                <div
                  id="mega-menu-icons-dropdown"
                  class="absolute z-10 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-4 dark:bg-gray-700"
                >
                  <div class="p-2 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <div className="flex hover:bg-slate-400 rounded-md p-2 cursor-pointer">
                      <img
                        src={imgTest}
                        height="40px"
                        width="40px"
                        className="rounded-md"
                      />
                      <div className="ml-3">
                        <span>site Builder</span>
                        <span class=" ml-2 text-xs font-medium  px-1  rounded bg-black text-gray-50">
                          New
                        </span>
                        <div className="text-xs mt-0.3">
                          Create sitemap & wireframes in minutes
                        </div>
                      </div>
                    </div>
                    <div className="flex hover:bg-slate-400 rounded-md p-2 cursor-pointer">
                      <img
                        src={imgtestOne}
                        height="40px"
                        width="40px"
                        className="rounded-md"
                      />
                      <div className="ml-3">
                        <span>Relume Library Figma Kit</span>

                        <div className="text-xs mt-0.3">
                          Improve your Figma workflow
                        </div>
                      </div>
                    </div>

                    <div className="flex hover:bg-slate-400 rounded-md p-2 cursor-pointer">
                      <img
                        src={chromeImg}
                        height="40px"
                        width="40px"
                        className="rounded-md"
                      />
                      <div className="ml-3">
                        <span>Relume Chrome Extension</span>

                        <div className="text-xs mt-0.3">
                          Boost your productivity in Webflow
                        </div>
                      </div>
                    </div>

                    <div className="flex hover:bg-slate-400 rounded-md p-2 cursor-pointer">
                      <img
                        src={libraries}
                        height="40px"
                        width="40px"
                        className="rounded-md"
                      />
                      <div className="ml-3">
                        <span>Libraries</span>

                        <div className="text-xs mt-0.3">
                          Create and share your own components
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <button
                id="mega-menu-dropdown-button"
                data-dropdown-toggle="mega-menu-dropdown"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() =>
                  setDropdown((prev) => (prev === "feature" ? "" : "feature"))
                }
              >
                Comapny
                <svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropDown === "feature" && (
                <div
                  id="mega-menu-dropdown"
                  class="absolute z-10 grid  text-sm  grid-cols-3  bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700"
                >
                  <div class=" col-span-2 p-4 pb-0 text-gray-900 md:pb-4 dark:text-white ">
                    <div>
                      <div className="flex ">
                        {tabData.map((tab) => (
                          <button
                            key={tab.id}
                            className={`${
                              activeTab === tab.id
                                ? " text-gray-800 border-blue-200 hover:bg-gray-50 border-b-1 border-black b-w-50"
                                : "text-gray-500 hover:text-gray-700  hover:bg-gray-50"
                            } mx-3 py-2 border-b-2 border-transparent focus:outline-none`}
                            onClick={() => setActiveTab(tab.id)}
                          >
                            {tab.label}
                            {tab.badge && (
                              <span class=" ml-2 text-xs font-medium  px-1 py-0.5 rounded bg-black text-gray-50">
                                New
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                      <div className="mt-2 max-h-96 overflow-y-scroll">
                        {activeTab === 1 && (
                          <>
                            <div className="border-b-[1px] border-slate-500"></div>
                            {tabArrayData.map((d) => (
                              <div className="flex mt-2 hover:bg-slate-100 cursor-pointer">
                                <div>
                                  <img
                                    src={d.img}
                                    alt="image"
                                    height="50px"
                                    width="50px"
                                  />
                                </div>
                                <div className="ml-3 ">
                                  {d.name}
                                  <div className="text-xs opacity-50">
                                    {d.value} components
                                  </div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                        {activeTab === 2 && <div>Tab 2 Content</div>}
                        {activeTab === 3 && <div>Tab 3 Content</div>}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 rounded-lg bg-[#e4e2df]">
                    <div className="p-4">
                      <div className="text-sm">Browse</div>
                      <div className="py-1 text-gray-500 hover:text-black cursor-pointer">
                        Free Components
                      </div>
                      <div className="py-1 text-gray-500 hover:text-black cursor-pointer">
                        All Components
                      </div>
                      <div className="py-1 text-gray-500 hover:text-black cursor-pointer">
                        New Components
                      </div>
                      <div className="py-1 text-gray-500 hover:text-black cursor-pointer">
                        Page Template
                      </div>
                      <div className="py-1 text-gray-500 hover:text-black cursor-pointer">
                        UI Element
                      </div>
                    </div>
                    <div className="p-4">
                      <div>Inspiration Feed</div>
                      <div className="text-xs opacity-50">
                        Get inspiration on components <br />
                        to use for your next project
                      </div>
                      <div>
                        <img
                          src={testImg}
                          height="170px"
                          width="170px"
                          className="pt-2"
                        />
                      </div>
                      <div className="text-center pt-2">
                        <button class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold  hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                          View Inspiration
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Learn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
