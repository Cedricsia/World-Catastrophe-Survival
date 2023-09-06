import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Tutorials from "../pages/Tutorials";
import Trainings from "../pages/Trainings";
import Eshop from "../pages/Eshop";
import Profile from "../pages/Profile";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/eshop" element={<Eshop />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default Router;
