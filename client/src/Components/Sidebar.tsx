const Sidebar = () => {
  const handelclick = () => {
    const sidebar = document.querySelector("div.side-bar");
    if (sidebar?.classList.contains("sm:hidden")) {
      sidebar?.classList.replace("flex", "hidden");
      document
        .querySelector("div header button.menu-btn")
        ?.classList.replace("hidden", "flex");
    } else {
      sidebar?.classList.replace("sm:flex", "sm:hidden");
      document
        .querySelector("div header button.menu-btn")
        ?.classList.replace("sm:hidden", "sm:flex");
    }
  };
  return (
    <div className="side-bar text-white w-52 p-4 h-screen hidden sm:flex flex-col justify-between bg-[#18181d] z-index[10000]">
      <div className="flex items-center gap-1.5 pb-4">
        <button
          className="menu-btn"
          id="menu-close"
          onClick={() => handelclick()}
        >
          <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bx-log-out-circle"></i>
        </button>
        <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bx-pulse"></i>
        <a
          className="no-underline hover:text-[#5773ff] text-white  hover:text-[#5773ff]"
          href="#"
        >
          AsmrProg
        </a>
      </div>

      <div className="menu">
        <h6 className="text-base text-[#919191] uppercase mb-1">Menu</h6>
        <ul className="list-style: none">
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-bolt-circle"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Explore
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-volume-full"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Genres
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-album"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Albums
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-microphone"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Artists
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-radio"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Poddcasts
            </a>
          </li>
        </ul>
      </div>

      <div className="menu">
        <h6 className="text-[#919191] uppercase mb-1">Library</h6>
        <ul className="list-style: none">
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer text-base text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bx-undo"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Recent
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-photo-album"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Albums
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-heart"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Favourites
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-folder"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Local
            </a>
          </li>
        </ul>
      </div>

      <div className="menu">
        <h6 className="text-[#919191] uppercase mb-1">Playlist</h6>
        <ul className="list-style: none">
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-plus-square"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Create New
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-caret-right-circle"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Best of 2023
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-caret-right-circle"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Best of 2022
            </a>
          </li>
          <li className="flex items-center gap-5 cursor-pointer mb-1">
            <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bxs-caret-right-circle"></i>
            <a
              className="text-sm no-underline hover:text-[#5773ff] text-white"
              href="#"
            >
              Kael Fischer
            </a>
          </li>
        </ul>
      </div>
      <div className="playing">
        <div className="bg-[#32323d] flex items-center gap-2.5 text-white text-[13px] p-2.5 rounded-[6px_6px_0_0]">
          <img
            className="object-cover object-top rounded-lg w-9 h-9"
            src="https://img.freepik.com/free-vector/cool-beard-man-barber-head-with-glasses-cartoon-vector-icon-illustration-people-barber-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3960.jpg?w=740&t=st=1706382760~exp=1706383360~hmac=4f9ae54ab1d63d6090320949713bd5fd21a7f72ed2ae0cae8e44f3a205fb0d45"
          />
          <h4>
            Apple
            <br />
            Homepod
          </h4>
        </div>
        <div className="bg-[#25252d] flex items-center justify-center gap-1.5 text-xs p-2 rounded-[0_0_6px_6px]">
          <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bx-podcast"></i>
          <p className="text-[#919191]">Playing On Device</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
