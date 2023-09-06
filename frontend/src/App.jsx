import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SidebarMobile from "./components/SidebarMobile";
import Router from "./routes/Router";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="font-noto lg:flex">
      <Navbar setSidebar={setSidebar} sidebar={sidebar} />
      <Sidebar />
      {sidebar && <SidebarMobile />}
      <div className="lg:ml-[17rem]">
        <Router />
      </div>
    </div>
  );
}

export default App;
