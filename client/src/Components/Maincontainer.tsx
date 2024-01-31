import Header from "./Header";
import Player from "./Player";

const Maincontainer = () => {
  const openPlayer = () => {
    const player = document.querySelector("main div.music-player");
    player?.classList.contains("hidden")
      ? player?.classList.replace("hidden", "flex")
      : player?.classList.replace("flex", "hidden");
  };
  return (
    <main className="px-9 pb-[1.2rem] w-screen">
      <Header />
      <div className="text-white" onClick={() => openPlayer()}>
        hello
      </div>
      <Player />
    </main>
  );
};
export default Maincontainer;
