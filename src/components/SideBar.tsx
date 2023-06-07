'use client';
import { useAppSelector } from '@/GlobalRedux/hooks';

interface SideBarProps {
  category: any;
}

function SideBar({ category }: SideBarProps) {
  const sideBar = useAppSelector((state) => state.home.sideBar);

  return (
    <div className="SideBar z-[1]">
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full ${
          sideBar && 'sm:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="/" className="flex items-center pl-2.5 mb-5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              O World
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <a
              href={`/`}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
            </a>
            {category &&
              Object.entries(category).map(([key]) => (
                <li key={key}>
                  <a
                    href={`/country/${category.country.id}/category/${key}`}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                    </span>
                  </a>
                </li>
              ))}
            <a
              href={`/about`}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">About</span>
            </a>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
