import React from "react";
import game_cover from "../../../Assets/Images/game_cover_1.png";
import logo from "../../../Assets/SVG/2.svg";
import maximize from "../../../Assets/SVG/8.svg";
import search from "../../../Assets/SVG/5.svg";
import cancel from "../../../Assets/SVG/9.svg";
import minimize from "../../../Assets/SVG/10.svg";

const Navbar = () => {
  return (
    <div
      className="  h-[450px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${game_cover})` }}
    >
      <header>
        <nav class=" border-gray-200 px-4 lg:px-6 py-2.5 ">
          <div class="flex flex-wrap justify-end items-center">
            <div class="flex items-center lg:order-2 p-4">
              <img src={search} className="w-4 h-4 m-2 " />
              <img src={logo} className="w-4 h-4 m-2 " />
              <img src={minimize} className="w-4 h-4 m-2 " />
              <img src={maximize} className="w-4 h-4 m-2 " />
              <img src={cancel} className="w-4 h-4 m-2 " />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
