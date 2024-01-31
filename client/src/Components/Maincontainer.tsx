import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllHomeData,
  getHomeDataStatus,
  getHomeDataError,
  fetchUserData,
} from "../features/homeData";
import Header from "./Header";
import Player from "./Player";

const Maincontainer = () => {
  const dispatch = useDispatch();

  // const data = useSelector(selectAllHomeData);
  // const Status = useSelector(getHomeDataStatus);
  // const error = useSelector(getHomeDataError);

  const { loading, error } = useSelector((state) => state.HomeData);
  const data = useSelector(selectAllHomeData);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>Error: {error}</span>;
  }

  return (
    <main className="px-9 pb-[1.2rem] w-screen">
      <Header />
      <div className="p-white">
        <span>
          {data ? (
            <span className="text-white">
              <p>User Data:</p>
              {Object.keys(data.modules).map((result) => {
                return data.modules[result].title;
              })}
            </span>
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
