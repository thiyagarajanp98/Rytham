import Header from "./Header";

const Maincontainer = () => {
  return (
    <main className="px-9 pb-[1.2rem] w-screen">
      <Header />
      <div className="music-player text-white bg-[#202026] h-[88%] flex flex-col rounded-md">
        <div className="top-section h-[86%] p-5">
          <div className="header flex items-center justify-between mb-[30px]">
            <h5>Player</h5>
            <i className="text-xl bx bxs-playlist"></i>
          </div>
          <div className="song-info flex flex-col items-center gap-6 text-center">
            <img
              className="w-[280px] h-[220px]"
              src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1706645299~exp=1706645899~hmac=b220ff17f3a7a0b4862af6968d64f3d9ee4a251615e32ccb65a3774180dd0ea6"
            />
            <div className="description">
              <h3 className="text-[26px] font-medium mb-2">Ripple Echoes</h3>
              <h5 className="text-base mb-1">Kael Fischer</h5>
              <p className="text-[#919191] text-xs font-[bold]">Best of 2024</p>
            </div>
            <div className="progress flex items-center mx-0 my-2.5">
              <p className="text-[11px]">02:45</p>
              <div className="active-line relative w-[120px] h-0.5 bg-white ml-[30px]"></div>
              <div className="deactive-line w-20 h-0.5 bg-[#919191] mr-[30px]"></div>
              <p className="text-[11px]">01:02</p>
            </div>
          </div>

          <div className="player-actions bg-[#5773ff] h-[26%] flex flex-col items-center relative rounded-md">
            <div className="buttons  flex items-center gap-[30px] mt-6">
              <i className="text-xl bx bx-repeat"></i>
              <i className="text-xl bx bx-first-page"></i>
              <i className="text-xl bx bxs-right-arrow play-button bg-white text-[#5773ff] p-4 rounded-[18px]"></i>
              <i className="text-xl bx bx-last-page"></i>
              <i className="text-xl bx bx-transfer-alt"></i>
            </div>
            <div className="lyrics flex flex-col items-center absolute bottom-2">
              <i className="text-xl bx bx-chevron-up"></i>
              <h5>LYRICS</h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Maincontainer;
