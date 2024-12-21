import propTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../context/MovieProvider";
import { useContext } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1200 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1200, min: 992 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 992, min: 768 },
    items: 3,
  },
  iphone: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

// eslint-disable-next-line react/prop-types
const MovieList = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-2xl font-bold mb-4">{title}</h2>

      {/* card */}
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="relative w-[200px] h-[300px] bg-red-300 group"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full " />
                <img
                  src={`${import.meta.env.VITE_API_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-3">
                <p className="uppercase text-md text-white">
                  {item.title || item.original_title}
                </p>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

MovieList.propTypes = {
  title: propTypes.string.isRequired,
  data: propTypes.array,
};

export default MovieList;
