import React, { useState, useEffect } from "react";
import gameLogo from "../../Assets/Images/gamelogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewApplication = () => {
  const [appLocation, setAppLocation] = useState("");
  const [gameDetail, setGameDetail] = useState("");
  const [gameUrl, setGameUrl] = useState("");

  const storedData = JSON.parse(localStorage.getItem("data")) || [];

  const handleStorage = () => {
    const newData = {
      appLocation,
      gameDetail,
      gameUrl,
    };
    const updatedData = [...storedData, newData];
    localStorage.setItem("data", JSON.stringify(updatedData));
    toast("Game Added !");
    setAppLocation("");
    setGameDetail("");
    setGameUrl("");
  };

  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <div className="text-white text-sm md:text-2xl	font-bold mb-[49px]">
            ADD NEW APPlICATION
          </div>
          <div className="md:flex md:items-center">
            <div className="text-gray-400 text-sm md:text-2xl font-medium">
              Upload Image
            </div>
            <div className="mb-4 text-white ml-0 md:ml-[30px] text-sm md:text-2xl	font-extrabold	">
              <input
                type="url"
                id="website"
                name="game_url"
                value={gameUrl}
                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-[300px] p-2.5 focus:outline-none"
                placeholder="gameurl.com"
                required
                onChange={(e) => setGameUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="text-gray-400 text-sm md:text-2xl font-medium">
              App Details
            </div>
            <div className="mb-4 text-white ml-0 md:ml-[30px]  text-sm md:text-2xl	font-extrabold	">
              <input
                type="text"
                name="game_detail"
                id="detail"
                value={gameDetail}
                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-[300px] p-2.5 focus:outline-none"
                placeholder="detail here"
                required
                onChange={(e) => setGameDetail(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="text-gray-400 text-sm md:text-2xl font-medium">
              App Location
            </div>
            <div className="text-white ml-0 md:ml-[30px] text-sm md:text-2xl	font-extrabold	">
              <input
                className="text-lg block w-full text-sm text-white border border-gray-600 rounded-lg cursor-pointer w-[300px] bg-gray-700  focus:outline-none "
                id="file_input"
                value={appLocation}
                type="file"
                name="app_location"
                onChange={(e) => setAppLocation(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block ml-auto mr-[118px]">
          <img src={gameUrl} className="w-[257px] h-[306px]" />
        </div>
        <ToastContainer />
      </div>
      <button
        onClick={handleStorage}
        className="w-[193px] fixed bottom-12  bg-gray-600 text-center text-white font-bold text-sm md:text-2xl py-2 px-4 rounded-full"
      >
        DONE
      </button>
    </>
  );
};

export default NewApplication;
