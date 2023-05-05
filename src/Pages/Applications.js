import React from "react";
import GameCard from "../Components/Common/GameCard/GameCard";
import GetStartedBtn from "../Components/Common/GetStartedBtn/GetStartedBtn";

const Applications = () => {
  return (
    <div>
      <div className="mt-[115px]">
        <GetStartedBtn />
        <GameCard />
      </div>
      <GameCard />
    </div>
  );
};

export default Applications;
