import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I couldn’t be happier with my purchase! The plants arrived fresh, healthy, and beautifully potted, adding the perfect touch of greenery to my home",
    },
    {
      id: 2,
      text: "The entire experience was seamless—from ordering to delivery. My plants arrived quickly and in perfect condition, and I love how they brighten up my office!",
    },
    {
      id: 3,
      text: "I was amazed by the quality of the plants at such affordable prices! Plus, the customer service team was so helpful in guiding me to choose the right ones for my space",
    },
    {
      id: 4,
      text: "This site exceeded my expectations! Not only did I receive stunning, healthy plants, but the fast delivery and excellent support made the whole process a breeze",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="py-4 slider-container w-[80%] mx-auto" data-aos="fade-up" data-aos-delay="200">
      <Slider {...settings}>
        {testimonials.map((data) => (
          <div key={data.id} className="flex flex-col p-8 gap-4 justify-center items-center">
            <RiDoubleQuotesR className="text-5xl text-thick mx-auto font-semibold" />
            <p className="text-xl w-1/2 mx-auto">{data.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
