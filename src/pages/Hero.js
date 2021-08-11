import Card from "../Components/Card";
import AsyncSearchBar from "../Components/AsyncSearchBar";

function Hero() {
  return (
    <div className="container mx-auto px-12 md:px-4">
      <div className="flex w-full flex-col items-center mt-32 min-h-screen">
        <h1 className="text-white text-3xl md:text-4xl">
          Support your Favourite Creators!
        </h1>

        <div className="flex flex-row">
          <AsyncSearchBar />
        </div>
        <div className="mt-28">
          <h1 className="text-3xl md:text-4xl text-white">
            Some of our Top Creators!
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Hero;
