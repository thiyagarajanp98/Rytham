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
                <p className="tracking-[1px] text-[15px] mt-2">User Data:</p>
                {Object.keys(data.modules).map((result) => {
                  return data.modules[result].title;
                })}
              </span>

              <div className="wrapper flex  gap-x-4 p-2 overflow-x-scroll w-[90%] justify-around">
                <div className="group w-[150px] h-[150px] relative flex items-end transition-[0.4s] duration-[ease-out] shadow-[0px_7px_10px_rgba(0,0,0,0.5)] rounded-[15px] hover:translate-y-5">
                  <img
                    className="group-hover:opacity-30 w-full h-full object-cover absolute rounded-[15px] left-0 top-0"
                    src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  />
                  <div className="info relative z-[3] text-[white] opacity-0 translate-y-[10px] transition-[0.5s] group-hover:opacity-100 card-hover:translate-y-0 ">
                    <h1 className="m-0 text-2xl">Mountain</h1>
                    <p className="tracking-[1px] text-[15px] mt-2">
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
                <div className="group w-[150px] h-[150px] relative flex items-end transition-[0.4s] duration-[ease-out] shadow-[0px_7px_10px_rgba(0,0,0,0.5)] rounded-[15px] hover:translate-y-5">
                  <img
                    className="group-hover:opacity-30 w-full h-full object-cover absolute rounded-[15px] left-0 top-0"
                    src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  />
                  <div className="info relative z-[3] text-[white] opacity-0 translate-y-[10px] transition-[0.5s] group-hover:opacity-100 card-hover:translate-y-0 ">
                    <h1 className="m-0 text-2xl">Mountain</h1>
                    <p className="tracking-[1px] text-[15px] mt-2">
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
                <div className="group w-[150px] h-[150px] relative flex items-end transition-[0.4s] duration-[ease-out] shadow-[0px_7px_10px_rgba(0,0,0,0.5)] rounded-[15px] hover:translate-y-5">
                  <img
                    className="group-hover:opacity-30 w-full h-full object-cover absolute rounded-[15px] left-0 top-0"
                    src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  />
                  <div className="info relative z-[3] text-[white] opacity-0 translate-y-[10px] transition-[0.5s] group-hover:opacity-100 card-hover:translate-y-0 ">
                    <h1 className="m-0 text-2xl">Mountain</h1>
                    <p className="tracking-[1px] text-[15px] mt-2">
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
                <div className="group w-[150px] h-[150px] relative flex items-end transition-[0.4s] duration-[ease-out] shadow-[0px_7px_10px_rgba(0,0,0,0.5)] rounded-[15px] hover:translate-y-5">
                  <img
                    className="group-hover:opacity-30 w-full h-full object-cover absolute rounded-[15px] left-0 top-0"
                    src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  />
                  <div className="info relative z-[3] text-[white] opacity-0 translate-y-[10px] transition-[0.5s] group-hover:opacity-100 card-hover:translate-y-0 ">
                    <h1 className="m-0 text-2xl">Mountain</h1>
                    <p className="tracking-[1px] text-[15px] mt-2">
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
                <div className="group w-[150px] h-[150px] relative flex items-end transition-[0.4s] duration-[ease-out] shadow-[0px_7px_10px_rgba(0,0,0,0.5)] rounded-[15px] hover:translate-y-5">
                  <img
                    className="group-hover:opacity-30 w-full h-full object-cover absolute rounded-[15px] left-0 top-0"
                    src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  />
                  <div className="info relative z-[3] text-[white] opacity-0 translate-y-[10px] transition-[0.5s] group-hover:opacity-100 card-hover:translate-y-0 ">
                    <h1 className="m-0 text-2xl">Mountain</h1>
                    <p className="tracking-[1px] text-[15px] mt-2">
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
                <div className="group w-[150px] h-[150px] relative flex items-end transition-[0.4s] duration-[ease-out] shadow-[0px_7px_10px_rgba(0,0,0,0.5)] rounded-[15px] hover:translate-y-5">
                  <img
                    className="group-hover:opacity-30 w-full h-full object-cover absolute rounded-[15px] left-0 top-0"
                    src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  />
                  <div className="info relative z-[3] text-[white] opacity-0 translate-y-[10px] transition-[0.5s] group-hover:opacity-100 card-hover:translate-y-0 ">
                    <h1 className="m-0 text-2xl">Mountain</h1>
                    <p className="tracking-[1px] text-[15px] mt-2">
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
                <div className="group w-[150px] h-[150px] relative flex items-end transition-[0.4s] duration-[ease-out] shadow-[0px_7px_10px_rgba(0,0,0,0.5)] rounded-[15px] hover:translate-y-5">
                  <img
                    className="group-hover:opacity-30 w-full h-full object-cover absolute rounded-[15px] left-0 top-0"
                    src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  />
                  <div className="info relative z-[3] text-[white] opacity-0 translate-y-[10px] transition-[0.5s] group-hover:opacity-100 card-hover:translate-y-0 ">
                    <h1 className="m-0 text-2xl">Mountain</h1>
                    <p className="tracking-[1px] text-[15px] mt-2">
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
                <div className="group w-[150px] h-[150px] relative flex items-end transition-[0.4s] duration-[ease-out] shadow-[0px_7px_10px_rgba(0,0,0,0.5)] rounded-[15px] hover:translate-y-5">
                  <img
                    className="group-hover:opacity-30 w-full h-full object-cover absolute rounded-[15px] left-0 top-0"
                    src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  />
                  <div className="info relative z-[3] text-[white] opacity-0 translate-y-[10px] transition-[0.5s] group-hover:opacity-100 card-hover:translate-y-0 ">
                    <h1 className="m-0 text-2xl">Mountain</h1>
                    <p className="tracking-[1px] text-[15px] mt-2">
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
                <div className="group w-[150px] h-[150px] relative flex items-end transition-[0.4s] duration-[ease-out] shadow-[0px_7px_10px_rgba(0,0,0,0.5)] rounded-[15px] hover:translate-y-5">
                  <img
                    className="group-hover:opacity-30 w-full h-full object-cover absolute rounded-[15px] left-0 top-0"
                    src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                  />
                  <div className="info relative z-[3] text-[white] opacity-0 translate-y-[10px] transition-[0.5s] group-hover:opacity-100 card-hover:translate-y-0 ">
                    <h1 className="m-0 text-2xl">Mountain</h1>
                    <p className="tracking-[1px] text-[15px] mt-2">
                      Lorem Ipsum is simply dummy text from the printing and
                      typeseting industry
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <span>No user data found.</span>
          )}
        </span>
      </div>
    </main>
  );
};
export default Maincontainer;
