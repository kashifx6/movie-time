import React from "react";
import "./GameCard.css";
import gameLogo from "../../../Assets/Images/gamelogo.png";
import playIcon from "../../../Assets/SVG/play.svg";

const GameCard = (props) => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 md:flex mb-[42px]">
        <div className="w-full game-card rounded-lg shadow ">
         
            <h5 className=" p-5 md:p-0 game-heading ml-[40px] mt-[47px]">
             {props.game_detail}{" "}
            </h5>
        
          <button
            type="button"
            className="mb-[10px] ml-[40px] mt-[47px] text-white bg-[#59BF40] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-[360px]"
          >
            <img src={playIcon} alt="playIcon" className="w-4 h-4 mr-[25px]" />
            Play
          </button>
        </div>
        <div className="hidden md:block ">
          <img src={props.game_url} className="w-[257px] h-[306px]" />
        </div>
      </div>
    </>
  );
};

export default GameCard;
