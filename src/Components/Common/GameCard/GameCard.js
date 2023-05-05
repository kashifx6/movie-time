import React from "react";
import "./GameCard.css";
import gameLogo from "../../../Assets/Images/gamelogo.png";
const GameCard = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 md:flex mb-[42px]">
        <div className="w-full game-card rounded-lg shadow ">
          <a href="#">
            <h5 className="p-5 md:p-0 game-heading ml-[40px] mt-[47px]">
              This will be the description for the Game, which could be in
              detail as well.{" "}
            </h5>
          </a>

          <a
            href="#"
            className="font-medium text-2xl	text-white flex items-center ml-[40px] mt-[47px]"
          >
            Launch “Game Name”
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden md:block">
          <img src={gameLogo} />
        </div>
      </div>
    </>
  );
};

export default GameCard;
