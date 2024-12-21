import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[800px] bg-banner bg-center bg-no-repeat bg-cover relative">
      {/* div opacity */}
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />

      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        {/* Left */}
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white text-lg bg-gradient-to-r from-red-600 to-red-200 py-2 px-3">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold uppercase">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            aliquid obcaecati, dignissimos mollitia corporis debitis ad esse aut
            corrupti rerum architecto quibusdam nisi id ipsum? Vel iusto harum
            ad nesciunt.
          </p>
          {/* button */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-white bg-black font-bold text-sm">
              Chi Tiết
            </button>
            <button className="px-4 py-2 text-white bg-red-700 font-bold text-sm ">
              Xem phim
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-[50%] flex items-center justify-center">
          <div className="relative w-[300px] h-[400px] group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="h-full w-full object-cover"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img
                src={IconPlay}
                alt="temp"
                className="relative w-16 h-16 z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
