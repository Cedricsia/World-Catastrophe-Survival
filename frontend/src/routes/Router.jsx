import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Tutorials from "../pages/Tutorials";
import Trainings from "../pages/Trainings";
import Eshop from "../pages/Eshop";
import Profile from "../pages/Profile";
import NoMatch from "../pages/NoMatch";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

function Router({ chatModal, setChatModal }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route
        path="/eshop"
        element={<Eshop chatModal={chatModal} setChatModal={setChatModal} />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Router;
