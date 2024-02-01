import { useSelector } from "react-redux";
import {
  selectAllHomeData,
  getHomeDataStatus,
  getHomeDataError,
} from "../features/homeData";
import Header from "./Header";
import Player from "./Player";

const Maincontainer = () => {
  const data = useSelector(selectAllHomeData);
  const loading = useSelector(getHomeDataStatus);
  const error = useSelector(getHomeDataError);

  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>Error: {error}</span>;
  }

  return (
    <main className="px-9 py-[0.6rem] w-screen">
      <Header />
      <div className="p-white">
        <span>
          {data ? (
            <>
              <span className="text-white">
                <p>User Data:</p>
                {Object.keys(data.modules).map((result) => {
                  return data.modules[result].title;
                })}
              </span>
              <section className="carousel w-full overflow-x-scroll relative box-border pt-20 p-[30px]">
                <h2 className="categories__title text-[rgb(77,55,102)] text-[28px] absolute pl-[30px]">
                  My List
                </h2>
                <div className="carousel__container whitespace-nowrap inline-block mx-0 my-[70px] pb-2.5">
                  <div className="carousel-item opacity-30 hover:opacity-100 hover:scale-150 w-[200px] h-[250px] bg-[#95bcd6] overflow-hidden inline-block cursor-pointer transition-[1000ms] duration-[all] origin-[center_left] relative mr-2.5 mt-[70px] rounded-[20px]">
                    <img
                      className="carousel-item__img w-[200px] h-[250px] object-cover"
                      src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="people"
                    />
                    <div className="carousel-item__details text-white mx-0 my-[5px] text-[10px] opacity-0 transition-[450ms] duration-[opacity] absolute p-2.5 inset-0 hover:opacity-100">
                      <div className="controls pt-[180px]">
                        <span
                          className="text-[0.9rem] text-[#2ecc71] fas fa-play-circle"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fas fa-plus-circle"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <h5 className="carousel-item__details--title text-white mx-0 my-[5px]">
                        Descriptive Title
                      </h5>
                      <h6 className="carousel-item__details--subtitle text-white mx-0 my-[5px]">
                        Date and Duration
                      </h6>
                    </div>
                  </div>
                  <div className="carousel-item opacity-30 hover:opacity-100 hover:scale-150 w-[200px] h-[250px] bg-[#95bcd6] overflow-hidden inline-block cursor-pointer transition-[1000ms] duration-[all] origin-[center_left] relative mr-2.5 mt-[70px] rounded-[20px]">
                    <img
                      className="carousel-item__img w-[200px] h-[250px] object-cover"
                      src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="people"
                    />
                    <div className="carousel-item__details text-white mx-0 my-[5px] text-[10px] opacity-0 transition-[450ms] duration-[opacity] absolute p-2.5 inset-0 hover:opacity-100">
                      <div className="controls pt-[180px]">
                        <span
                          className="text-[0.9rem] text-[#2ecc71] fas fa-play-circle"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fas fa-plus-circle"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <h5 className="carousel-item__details--title text-white mx-0 my-[5px]">
                        Descriptive Title
                      </h5>
                      <h6 className="carousel-item__details--subtitle text-white mx-0 my-[5px]">
                        Date and Duration
                      </h6>
                    </div>
                  </div>
                  <div className="carousel-item opacity-30 hover:opacity-100 hover:scale-150 w-[200px] h-[250px] bg-[#95bcd6] overflow-hidden inline-block cursor-pointer transition-[1000ms] duration-[all] origin-[center_left] relative mr-2.5 mt-[70px] rounded-[20px]">
                    <img
                      className="carousel-item__img w-[200px] h-[250px] object-cover"
                      src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="people"
                    />
                    <div className="carousel-item__details text-white mx-0 my-[5px] text-[10px] opacity-0 transition-[450ms] duration-[opacity] absolute p-2.5 inset-0 hover:opacity-100">
                      <div className="controls pt-[180px]">
                        <span
                          className="text-[0.9rem] text-[#2ecc71] fas fa-play-circle"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fas fa-plus-circle"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <h5 className="carousel-item__details--title text-white mx-0 my-[5px]">
                        Descriptive Title
                      </h5>
                      <h6 className="carousel-item__details--subtitle text-white mx-0 my-[5px]">
                        Date and Duration
                      </h6>
                    </div>
                  </div>
                  <div className="carousel-item opacity-30 hover:opacity-100 hover:scale-150 w-[200px] h-[250px] bg-[#95bcd6] overflow-hidden inline-block cursor-pointer transition-[1000ms] duration-[all] origin-[center_left] relative mr-2.5 mt-[70px] rounded-[20px]">
                    <img
                      className="carousel-item__img w-[200px] h-[250px] object-cover"
                      src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="people"
                    />
                    <div className="carousel-item__details text-white mx-0 my-[5px] text-[10px] opacity-0 transition-[450ms] duration-[opacity] absolute p-2.5 inset-0 hover:opacity-100">
                      <div className="controls pt-[180px]">
                        <span
                          className="text-[0.9rem] text-[#2ecc71] fas fa-play-circle"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fas fa-plus-circle"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <h5 className="carousel-item__details--title text-white mx-0 my-[5px]">
                        Descriptive Title
                      </h5>
                      <h6 className="carousel-item__details--subtitle text-white mx-0 my-[5px]">
                        Date and Duration
                      </h6>
                    </div>
                  </div>
                  <div className="carousel-item opacity-30 hover:opacity-100 hover:scale-150 w-[200px] h-[250px] bg-[#95bcd6] overflow-hidden inline-block cursor-pointer transition-[1000ms] duration-[all] origin-[center_left] relative mr-2.5 mt-[70px] rounded-[20px]">
                    <img
                      className="carousel-item__img w-[200px] h-[250px] object-cover"
                      src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="people"
                    />
                    <div className="carousel-item__details text-white mx-0 my-[5px] text-[10px] opacity-0 transition-[450ms] duration-[opacity] absolute p-2.5 inset-0 hover:opacity-100">
                      <div className="controls pt-[180px]">
                        <span
                          className="text-[0.9rem] text-[#2ecc71] fas fa-play-circle"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fas fa-plus-circle"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <h5 className="carousel-item__details--title text-white mx-0 my-[5px]">
                        Descriptive Title
                      </h5>
                      <h6 className="carousel-item__details--subtitle text-white mx-0 my-[5px]">
                        Date and Duration
                      </h6>
                    </div>
                  </div>
                  <div className="carousel-item opacity-30 hover:opacity-100 hover:scale-150 w-[200px] h-[250px] bg-[#95bcd6] overflow-hidden inline-block cursor-pointer transition-[1000ms] duration-[all] origin-[center_left] relative mr-2.5 mt-[70px] rounded-[20px]">
                    <img
                      className="carousel-item__img w-[200px] h-[250px] object-cover"
                      src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="people"
                    />
                    <div className="carousel-item__details text-white mx-0 my-[5px] text-[10px] opacity-0 transition-[450ms] duration-[opacity] absolute p-2.5 inset-0 hover:opacity-100">
                      <div className="controls pt-[180px]">
                        <span
                          className="text-[0.9rem] text-[#2ecc71] fas fa-play-circle"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fas fa-plus-circle"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <h5 className="carousel-item__details--title text-white mx-0 my-[5px]">
                        Descriptive Title
                      </h5>
                      <h6 className="carousel-item__details--subtitle text-white mx-0 my-[5px]">
                        Date and Duration
                      </h6>
                    </div>
                  </div>
                  <div className="carousel-item opacity-30 hover:opacity-100 hover:scale-150 w-[200px] h-[250px] bg-[#95bcd6] overflow-hidden inline-block cursor-pointer transition-[1000ms] duration-[all] origin-[center_left] relative mr-2.5 mt-[70px] rounded-[20px]">
                    <img
                      className="carousel-item__img w-[200px] h-[250px] object-cover"
                      src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="people"
                    />
                    <div className="carousel-item__details text-white mx-0 my-[5px] text-[10px] opacity-0 transition-[450ms] duration-[opacity] absolute p-2.5 inset-0 hover:opacity-100">
                      <div className="controls pt-[180px]">
                        <span
                          className="text-[0.9rem] text-[#2ecc71] fas fa-play-circle"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fas fa-plus-circle"
                          aria-hidden="true"
                        ></span>
                      </div>
                      <h5 className="carousel-item__details--title text-white mx-0 my-[5px]">
                        Descriptive Title
                      </h5>
                      <h6 className="carousel-item__details--subtitle text-white mx-0 my-[5px]">
                        Date and Duration
                      </h6>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <span>No user data found.</span>
          )}
        </span>
      </div>
      <Player />
    </main>
  );
};
export default Maincontainer;
