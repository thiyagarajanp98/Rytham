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

  const { data, loading, error } = useSelector((state) => state.user);
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
            <span>
              <p>User Data:</p>
              {data.modules.map((result) => {
                data[result].map((res) => {
                  return <p>{res.title}</p>;
                });
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
