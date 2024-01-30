import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="font-display flex w-full background: linear-gradient(#050505, #18181d)">
      <Sidebar />
      <Maincontainer />
    </div>
  );
};
export default Layout;
