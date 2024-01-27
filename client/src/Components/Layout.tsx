import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";

const Layout = () => {
  // console.log("Layout:", document.querySelector("font-display"));
  return (
    // grid-cols-[1fr_6fr]
    <div className="font-display flex w-full background: linear-gradient(#050505, #18181d)">
      <Sidebar />
      <Maincontainer />
    </div>
  );
};
export default Layout;
