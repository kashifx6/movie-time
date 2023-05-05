import React from "react";
import RecentGames from "../Components/RecentGames/RecentGames";
import GameCard from "../Components/Common/GameCard/GameCard";
import GetStartedBtn from "../Components/Common/GetStartedBtn/GetStartedBtn";

const Home = () => {
  return (
    <div>
        <div className="mb-[42px] ">
      <RecentGames />
      </div>
     
      <div>
        <GetStartedBtn />
        <GameCard />
      </div>
    </div>
  );
};

export default Home;
