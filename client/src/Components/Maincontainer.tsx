const Maincontainer = () => {
  console.log(document.querySelector("menu-close"));
  return (
    <main className="px-9 py-5 basis-[100%]">
      <header className="flex items-center justify-between">
        <div className="nav-links flex items-center gap-5">
          <button className="hidden menu-btn" id="menu-open">
            <i className="text-white cursor-pointer bx bx-menu"></i>
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

        <div className="flex items-center gap-1.5 w-[70%] bg-[#1d1d1d] border p-2.5 rounded-lg border-solid border-[#464748]">
          <i className="text-white cursor-pointer bx bx-search"></i>
          <input
            className="w-full bg-transparent text-white border-[none] outline-none"
            type="text"
            placeholder="Type here to search"
          />
        </div>
      </header>
    </main>
  );
};
export default Maincontainer;
