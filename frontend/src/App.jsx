/* eslint-disable import/no-unresolved */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SidebarMobile from "./components/SidebarMobile";
/* eslint-disable import/extensions */
import Router from "./routes/Router";

import ChatModal from "./components/ChatModal";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="font-noto lg:flex">
      <Navbar setSidebar={setSidebar} sidebar={sidebar} />
      <Sidebar />
      {sidebar && <SidebarMobile />}
      <div className="lg:ml-[17rem]">
        <ChatModal />
        <Router />
      </div>
    </div>
  );
}

export default App;
