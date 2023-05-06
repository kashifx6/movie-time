import React, { useState, useEffect } from "react";
import GameCard from "../Components/Common/GameCard/GameCard";

const Applications = () => {
  const [whatsNew, setWhatsNew] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setData(storedData);
  }, []);

  const handleNewGames = () => {
    const appLocation = localStorage.getItem("appLocation");
    const gameDetail = localStorage.getItem("gameDetail");
    const gameUrl = localStorage.getItem("gameUrl");

    const newData = { appLocation, gameDetail, gameUrl };

    setData((prevData) => [...prevData, newData]);
    setWhatsNew(true);
  };

  return (
    <div>
      <div className="mt-[115px]">
        <div className="flex justify-center mb-[42px]">
          <button class="bg-gray-600 text-center text-white font-bold text-2xl py-2 px-4 rounded-full">
            GET STARTED
          </button>
          <button
            onClick={handleNewGames}
            className="bg-transparent text-center text-white font-bold text-2xl py-2 px-4 rounded-full"
          >
            WHAT'S NEW
          </button>
        </div>
        {whatsNew && data && data.length > 0 && 
  data.map((item, index) => (
    item.gameUrl && item.gameDetail && item.appLocation && (
      <div key={index}>
        <GameCard 
          game_url={item.gameUrl} 
          game_detail={item.gameDetail} 
          game_location={item.appLocation} 
        />
      </div>
    )
  ))
}
      </div>
    </div>
  );
};

export default Applications;
