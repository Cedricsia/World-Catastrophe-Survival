import "./App.css";
import Sidebar from "./components/Sidebar";
import Router from "./routes/Router";

function App() {
  return (
    <div className="font-noto flex">
      <Sidebar />
      <div className="ml-[17rem]">
        <Router />
      </div>
    </div>
  );
}

export default App;
