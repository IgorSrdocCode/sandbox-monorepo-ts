import { Button } from "@packages/ui";

export function AppShellStacked() {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <header>
        <nav className="bg-white border-gray-200 px-4 py-2.5 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <a href="https://flowbite.com" className="flex mr-6">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Admin
                </span>
              </a>
              {/* <form action="#" method="GET" className="hidden md:block lg:pl-2">
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative md:w-64 lg:w-96">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Jump to Favorites, Apps, Pipelines..."
                  />
                </div>
              </form> */}
            </div>
            <div className="flex justify-between items-center lg:order-2">
              <Button className="hidden lg:block">Custom Button</Button>
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </button>
              <div
                className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                id="notification-dropdown"
              >
                <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                  Notifications
                </div>
                <div>
                  <a
                    href="#"
                    className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                        alt="Bonnie Green avatar"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        New message from
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Bonnie Green
                        </span>
                        : "Hey, what's up? All set for the presentation?"
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="Jese Leos avatar"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Jese leos
                        </span>
                        and
                        <span className="font-medium text-gray-900 dark:text-white">
                          5 others
                        </span>
                        started following you.
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                        10 minutes ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                        alt="Joseph McFall avatar"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Joseph Mcfall
                        </span>
                        and
                        <span className="font-medium text-gray-900 dark:text-white">
                          141 others
                        </span>
                        love your story. See it and view more stories.
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                        44 minutes ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                        alt="Roberta Casas image"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Leslie Livingston
                        </span>
                        mentioned you in a comment:
                        <span className="font-medium text-primary-600 dark:text-primary-500">
                          @bonnie.green
                        </span>
                        what do you say?
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                        1 hour ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                        alt="Robert image"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Robert Brown
                        </span>
                        posted a new video: Glassmorphism - learn how to
                        implement the new design trend.
                      </div>
                      <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                        3 hours ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
                >
                  <div className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    View all
                  </div>
                </a>
              </div>

              <button
                type="button"
                className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt="user photo"
                />
              </button>
              <div
                className="hidden z-50 my-4 rounded-xl w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown"
              >
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    Neil Sims
                  </span>
                  <span className="block text-sm text-gray-900 truncate dark:text-white">
                    name@flowbite.com
                  </span>
                </div>
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      My profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Account settings
                    </a>
                  </li>
                </ul>
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      My likes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                      Collections
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <span className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="mr-2 w-5 h-5 text-primary-600 dark:text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Pro version
                      </span>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                id="toggleMobileMenuButton"
                data-collapse-toggle="toggleMobileMenu"
                className="items-center p-2 text-gray-500 rounded-lg md:ml-2 lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="flex flex-wrap justify-between items-center py-3 px-4 pb-5 md:pb-3">
            <div className="flex items-center mb-2 md:mb-0">
              <button
                id="dropdownUserNameButton"
                data-dropdown-toggle="dropdownUserName"
                data-dropdown-placement="bottom"
                className="flex justify-between items-center p-2 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Open user menu</span>
                <div className="flex items-center mr-2">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    className="mr-2 w-7 h-7 rounded-full"
                    alt="Bonnie avatar"
                  />
                  <div className="text-left">
                    <div className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                      Personal
                    </div>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdownUserName"
                className="hidden z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                data-popper-placement="bottom"
              >
                <a
                  href="#"
                  className="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <div className="text-left">
                    <div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5 text-sm">
                      Company
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Created August, 2014
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <div className="text-left">
                    <div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5 text-sm">
                      Personal
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Created September, 2018
                    </div>
                  </div>
                </a>
              </div>
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <button
                type="button"
                id="regionDropdownButton"
                data-dropdown-toggle="regionDropdown"
                className="items-center p-2 pr-3 pl-4 text-gray-500 text-sm font-medium rounded-lg md:inline-flex hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-white focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                aims.ai
              </button>
              <div
                id="regionDropdown"
                className="hidden z-30 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="regionDropdownButton"
                >
                  <li>
                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex items-center h-5">
                        <input
                          id="helper-radio-4"
                          name="helper-radio"
                          type="radio"
                          value=""
                          className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="helper-radio-4"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div>themesberg.com</div>
                          <p
                            id="helper-radio-text-4"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                          >
                            Free templates and themes
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex items-center h-5">
                        <input
                          id="helper-radio-5"
                          name="helper-radio"
                          type="radio"
                          value=""
                          className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="helper-radio-5"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div>iconscale.com</div>
                          <p
                            id="helper-radio-text-5"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                          >
                            Open-source SVG icons
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <div className="flex items-center h-5">
                        <input
                          id="helper-radio-6"
                          name="helper-radio"
                          type="radio"
                          value=""
                          className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                      </div>
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="helper-radio-6"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div>ui.glass</div>
                          <p
                            id="helper-radio-text-6"
                            className="text-xs font-normal text-gray-500 dark:text-gray-300"
                          >
                            Glassmorphism UI framework
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full md:items-center md:flex md:w-auto">
              <button
                type="button"
                className="py-2.5 px-4 md:mr-2 text-xs font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Open app
              </button>
              <button
                id="moreOptionsDropdownButton"
                type="button"
                data-dropdown-toggle="moreOptionsDropdown"
                className="py-2.5 px-4 justify-center text-xs font-medium text-primary-700 dark:text-primary-500 bg-gray-50 rounded-lg dark:bg-gray-700 hover:bg-primary-700 hover:text-white dark:hover:text-white dark:border-primary-500 focus:ring-4 focus:ring-primary-300 border border-primary-700 dark:hover:bg-primary-700 dark:hover:border-primary-700 focus:outline-none dark:focus:ring-primary-800 inline-flex items-center"
              >
                More
                <svg
                  className="ml-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="hidden z-50 my-4 w-48 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                id="moreOptionsDropdown"
              >
                <ul
                  className="py-1 text-gray-700 dark:text-gray-300"
                  aria-labelledby="moreOptionsDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-500 dark:text-gray-300"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Create new app
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-500 dark:text-gray-300"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-500 dark:text-gray-300"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      App info
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg
                        className="mr-2 w-5 h-5 text-gray-500 dark:text-gray-300"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                        <path
                          fillRule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Edit app
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <nav className="lg:hidden bg-white shadow-sm dark:bg-gray-800 p-3">
          <form action="#" method="GET" className="md:hidden mb-3">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <div className="relative md:w-64 lg:w-96">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="search"
                id="mobile-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Jump to Favorites, Apps, Pipelines..."
              />
            </div>
          </form>
          <select
            id="navigation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value="overview"
            onChange={() => {}}
          >
            <option value="overview">Overview</option>
            <option value="resources">Resources</option>
            <option value="deploy">Deploy</option>
            <option value="metrics">Metrics</option>
            <option value="activity">Activity</option>
            <option value="access">Access</option>
            <option value="settings">Settings</option>
          </select>
        </nav>

        <nav
          id="toggleMobileMenu"
          className="hidden bg-white border-b border-gray-200 shadow-sm dark:bg-gray-900 lg:block dark:border-gray-800"
        >
          <div className="px-0 lg:px-6">
            <div className="flex items-center">
              <ul className="flex flex-col mt-0 w-full text-sm font-medium lg:flex-row">
                <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 border-b-2 dark:border-gray-900 border-white dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600"
                  >
                    Overview
                  </a>
                </li>
                <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                  <a
                    href="#"
                    className="block py-3 px-4 border-b-2 text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:border-primary-500 border-primary-600"
                    aria-current="page"
                  >
                    Resources
                  </a>
                </li>
                <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 border-b-2 border-white dark:border-gray-900 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600"
                  >
                    Deploy
                  </a>
                </li>
                <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 border-b-2 border-white dark:border-gray-900 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600"
                  >
                    Metrics
                  </a>
                </li>
                <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 border-b-2 border-white dark:border-gray-900 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600"
                  >
                    Activity
                  </a>
                </li>
                <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 border-b-2 border-white dark:border-gray-900 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600"
                  >
                    Access
                  </a>
                </li>
                <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                  <a
                    href="#"
                    className="block py-3 px-4 text-gray-500 dark:text-gray-400 hover:text-primary-600 border-b-2 border-white dark:border-gray-900 dark:hover:text-primary-500 dark:hover:border-primary-500 hover:border-primary-600"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="dark:bg-gray-900 flex-1 p-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
        <div className="border-2 border-dashed border-gray-300 rounded-xl dark:border-gray-600 h-96"></div>
      </main>
    </div>
  );
}
