import React from "react";
import gameLogo from "../../Assets/Images/gamelogo.png";

const NewApplication = () => {
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
            <div className="text-white ml-0 md:ml-[30px] text-sm md:text-2xl	font-extrabold	">
              Text box for - Image URL
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="text-gray-400 text-sm md:text-2xl font-medium">
              App Details
            </div>
            <div className="text-white ml-0 md:ml-[30px]  text-sm md:text-2xl	font-extrabold	">
              Text box for - Image URL
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="text-gray-400 text-sm md:text-2xl font-medium">
              App Location
            </div>
            <div className="text-white ml-0 md:ml-[30px] text-sm md:text-2xl	font-extrabold	">
              Text box for - Image URL
            </div>
          </div>
        </div>

        <div className="hidden md:block ml-auto mr-[118px]">
          <img src={gameLogo} />
        </div>
      </div>
      <button class="fixed bottom-12  bg-gray-600 text-center text-white font-bold text-sm md:text-2xl py-2 px-4 rounded-full">
        DONE
      </button>
    </>
  );
};

export default NewApplication;
