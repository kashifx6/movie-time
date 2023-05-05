import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import game1 from "../../Assets/Images/game1.png";
import game2 from "../../Assets/Images/game2.png";
import game3 from "../../Assets/Images/game3.png";
import game4 from "../../Assets/Images/game4.png";
import game5 from "../../Assets/Images/game5.png";
import game6 from "../../Assets/Images/game6.png";
const games = [
  { id: 1, image: game1 },
  { id: 2, image: game2 },
  { id: 3, image: game3 },
  { id: 4, image: game4 },
  { id: 5, image: game5 },
  { id: 6, image: game6 },
  { id: 7, image: game1 },
  { id: 8, image: game2 },
  { id: 9, image: game3 },
  { id: 10, image: game4 },
];

const RecentGames = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="font-extrabold mb-[35px] mt-[20px] text-white text-4xl">
          RECENTS
        </div>
        <Slider {...settings}>
          {games.map((game) => (
            <div key={game.id} className="pl-[4px]">
              <img
                className="mx-auto w-[194px] h-[290px] shadow-lg"
                src={game.image}
                alt={`Game ${game.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentGames;
