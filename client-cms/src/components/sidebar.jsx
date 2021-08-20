export default function Sidebar() {
  return (
    <div class="py-12 px-10 w-1/4">
      <div class="flex space-2 items-center border-b-2 pb-4">
        <div class="ml-3">
          <h1 class="text-3xl font-bold text-yellow-600">allyDoc</h1>
          <p class="text-center text-sm text-yellow-600 mt-1 font-serif">CMS</p>
        </div>
      </div>
      <div class="flex items-center space-x-4 mt-6 p-2 bg-indigo-600 rounded-md">
        <div>
          <p class="text-lg text-white font-semibold">Doctors list</p>
        </div>
      </div>
      <div class="mt-8">
        <ul class="space-y-10">
          <li>
            <a
              href="#"
              class="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
            >
              Users list
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
            >
              Create Doctor
            </a>
          </li>
        </ul>
      </div>
      <div class="flex mt-20 space-x-4 items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-400 hover:text-indigo-600 transition duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
        <a
          href="#"
          class="block font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
