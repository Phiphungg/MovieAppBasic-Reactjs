/* eslint-disable react/prop-types */
import proType from "prop-types";
import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const MovieSearch = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data &&
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
                  {item.name || item.title || item.original_title}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

MovieSearch.proType = {
  title: proType.string,
  data: proType.array,
};

export default MovieSearch;
