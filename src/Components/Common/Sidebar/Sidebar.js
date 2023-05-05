import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../../Assets/SVG/1.svg";
import applicationIcon from "../../../Assets/SVG/7.svg";
import settingIcon from "../../../Assets/SVG/4.svg";
import downloadIcon from "../../../Assets/SVG/6.svg";
import mediaIcon from "../../../Assets/SVG/3.svg";
const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "" : "opacity-70";
  };
  return (
    <>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-[250px] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-[#0E141B]">
          <ul class="space-y-2 text-normal	font-bold	">
            <li>
              <Link
                to="/"
                className={`flex items-center p-2 text-[#FFFFFF] rounded-lg hover:bg-blue-800 ${isActive(
                  "/"
                )}`}
              >
                <img src={homeIcon} className="w-4 h-4" />
                <span class="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/applications"
                className={`flex items-center p-2 text-[#FFFFFF] rounded-lg hover:bg-blue-800 ${isActive(
                  "/applications"
                )}`}
              >
                <img src={applicationIcon} className="w-4 h-4" />
                <span class="ml-3">Applications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/media"
                className={`flex items-center p-2 text-[#FFFFFF] rounded-lg hover:bg-blue-800 ${isActive(
                  "/media"
                )}`}
              >
                <img src={mediaIcon} className="w-4 h-4" />
                <span class="ml-3">Media</span>
              </Link>
            </li>
            <li>
              <Link
                to="/downloads"
                className={`flex items-center p-2 text-[#FFFFFF] rounded-lg hover:bg-blue-800 ${isActive(
                  "/downloads"
                )}`}
              >
                <img src={downloadIcon} className="w-4 h-4" />
                <span class="ml-3">Downloads</span>
              </Link>
            </li>
            <li className="last mt-auto">
              <Link
                to="/settings"
                className={`flex items-center p-2 text-[#FFFFFF] rounded-lg hover:bg-blue-800 ${isActive(
                  "/settings"
                )}`}
              >
                <img src={settingIcon} className="w-4 h-4" />
                <span class="ml-3">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
