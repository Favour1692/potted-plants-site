import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router";
import image1 from "../Pages/Images/Home/image1.jpg";
import image2 from "../Pages/Images/Home/image2.jpg";
import image3 from "../Pages/Images/Home/image3.jpg";
import image4 from "../Pages/Images/Home/image4.jpg";
import image5 from "../Pages/Images/Home/image5.jpg";
import image6 from "../Pages/Images/Home/image6.jpg";

function Card() {
  const cards = [
    {
      id: 1,
      img: image1,
      title: "plant name",
      price: "$25",
    },
    {
      id: 2,
      img: image2,
      title: "plant name",
      price: "$25",
    },
    {
      id: 3,
      img: image3,
      title: "plant name",
      price: "$25",
    },
    {
      id: 4,
      img: image4,
      title: "plant name",
      price: "$25",
    },
    {
      id: 5,
      img: image5,
      title: "plant name",
      price: "$25",
    },
    {
      id: 6,
      img: image6,
      title: "plant name",
      price: "$25",
    },
  ];

  let settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full py-2 my-2" data-aos="fade-left">
      <div className="w-[80%] text-4xl text-thick py-8 mx-auto" data-aos="fade-up">
        <h2>Select from our vast plant collections</h2>
      </div>
      <Slider {...settings}>
        {/* cards */}
        {cards.map((card) => (
          <div key={card.id} className="mr-4 py-8 flex flex-col gap-6 justify-center items-center bg-white shadow-lg shadow-black my-4" data-aos="fade-up">
            <img src={card.img} alt="" className="w-auto h-[250px] rounded-2xl mx-auto" />
            <h3 className="text-lg text-center">{card.title}</h3>
            <p className="text-center">{card.price}</p>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-8">
        <Link to="/products">
          <button className="bg-secondary py-2 px-4 rounded-xl hover:bg-thick hover:text-secondary text-xl border-2 border-thick" data-aos="fade-up">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
