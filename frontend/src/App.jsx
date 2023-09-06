import "./App.css";
import Sidebar from "./components/Sidebar";
import Router from "./routes/Router";

function App() {
  return (
    <div className="font-noto flex">
      <Sidebar />
      <div className="lg:ml-[17rem] w-full">
        <Router />
      </div>
    </div>
  );
}

export default App;
