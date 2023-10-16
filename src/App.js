import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    { id: 1, label: "Tab 1" },
    { id: 2, label: "Tab 2" },
    { id: 3, label: "Tab 3" },
  ];
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="https://flowbite.com" class="flex items-center">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          /> */}
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
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Components
              </a>
            </li>
            <li>
              <button
                id="mega-menu-dropdown-button"
                data-dropdown-toggle="mega-menu-dropdown"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
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
              <div
                id="mega-menu-dropdown"
                class="absolute z-10 grid hidden  w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
              >
                <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <div className="border-b border-gray-200">
                    <div className="flex">
                      {tabData.map((tab) => (
                        <button
                          key={tab.id}
                          className={`${
                            activeTab === tab.id
                              ? " text-gray-800 border-blue-200"
                              : "text-gray-500 hover:text-gray-700"
                          } px-4 py-2 border-b-2 border-transparent focus:outline-none`}
                          onClick={() => setActiveTab(tab.id)}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2">
                      {/* Render tab content based on activeTab state */}
                      {activeTab === 1 && <div>Tab 1 Content</div>}
                      {activeTab === 2 && <div>Tab 2 Content</div>}
                      {activeTab === 3 && <div>Tab 3 Content</div>}
                    </div>
                  </div>

                  <ul
                    class="space-y-4"
                    aria-labelledby="mega-menu-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Library
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Pro Version
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Playground
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="p-4">
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
