const Header = () => {
  const handelclick = () => {
    const sidebar = document.querySelector("div.hidden");
    if (sidebar?.classList.contains("sm:hidden")) {
      sidebar?.classList.replace("sm:hidden", "sm:flex");
      document
        .querySelector("div header button.menu-btn")
        ?.classList.replace("sm:flex", "sm:hidden");
    } else {
      sidebar?.classList.replace("hidden", "flex");
      document
        .querySelector("div header button.menu-btn")
        ?.classList.replace("flex", "hidden");
    }
  };
  const searchClick = () => {
    const input = document.querySelector("header input");
    const header = document.querySelectorAll("header a");

    if (!input?.checkVisibility()) {
      header.forEach((data) => {
        data?.classList.add("hidden");
      });
      input?.classList.replace("hidden", "flex");
      input.focus();
    } else {
      document.querySelectorAll("header a").forEach((data) => {
        data?.classList.contains("hidden")
          ? data?.classList.remove("hidden")
          : "";
      });
      input?.classList.replace("flex", "hidden");
    }
    input.value = "";
  };
  return (
    <header className="flex items-center justify-between">
      <div className="nav-links flex items-center gap-5">
        <button
          className="flex sm:hidden block menu-btn items-center justify-center bg-[#1d1d1d] border text-xl cursor-pointer p-1 rounded-lg border-solid border-[#464748]"
          onClick={() => handelclick()}
        >
          <i className="text-white cursor-pointer  text-base transition-all duration-[0.3s] ease-[ease] hover:text-[#5773ff] bx bx-menu"></i>
        </button>
        <a
          className="hover:text-[#5773ff] uppercase text-[#919191] transition-all duration-[0.3s] ease-[ease]"
          href="#"
        >
          Music
        </a>
        <a
          className="hover:text-[#5773ff] uppercase text-[#919191] transition-all duration-[0.3s] ease-[ease]"
          href="#"
        >
          Live
        </a>
        <a
          className="hover:text-[#5773ff] uppercase text-[#919191] transition-all duration-[0.3s] ease-[ease]"
          href="#"
        >
          Podcast
        </a>
      </div>

      <div className="flex items-center gap-1.5 lg:w-[70%] bg-[#1d1d1d] border p-2.5 rounded-lg border-solid border-[#464748]">
        <i
          className="text-white cursor-pointer bx bx-search"
          onClick={() => searchClick()}
        ></i>
        <input
          className=" hidden sm:flex w-full bg-transparent text-white border-[none] outline-none"
          type="text"
          placeholder="Type here to search"
          onBlur={() => searchClick()}
        />
      </div>
    </header>
  );
};

export default Header;
