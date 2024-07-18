import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";

const FreeBook = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4000/book");
        setBook(response.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="">
          <h1 className="font-semibold text-xl pb-2 ">Free Offered Courses </h1>
          <p>
            This book is prefered free of cost for user.so use this book for
            reading and gain knowledge.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
