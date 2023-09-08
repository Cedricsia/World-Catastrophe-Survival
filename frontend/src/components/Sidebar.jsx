import { NavLink, Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import expressApi from "../services/expressApi";

import logo from "../assets/logo-fallout.webp";
import profile from "../assets/profile.svg";
import blueBrain from "../assets/brain-blue.svg";
import brain from "../assets/brain.svg";
import blueBook from "../assets/blue-book.svg";
import book from "../assets/book.svg";
import blueTrain from "../assets/blue-train.svg";
import train from "../assets/train.svg";
import blueShop from "../assets/blue-shop.svg";
import shop from "../assets/shop.svg";
import off from "../assets/off.svg";
import on from "../assets/on.svg";

function Sidebar() {
  const [setUser, user] = useUserContext();

  const navigate = useNavigate();

  const handleDisconnect = () => {
    expressApi.get("/api/auth/logout").then((res) => {
      if (res.status === 200) {
        localStorage.clear();
        setUser(null);
        navigate("/");
      } else {
        // toastify?
        console.warn("Impossible de se déconnecter");
      }
    });
  };

  return (
    <div className="lg:flex lg:flex-col lg:justify-between lg:items-center lg:bg-primary lg:w-[17rem] lg:h-full lg:min-h-screen lg:py-3 lg:fixed hidden">
      <div className="w-full">
        <div className="flex flex-col items-center gap-2">
          <Link to="/">
            <img src={logo} alt="logo-wcs" className="w-44" />
          </Link>
        </div>

        {user && (
          <div>
            <Link to="/profile" className="flex flex-col items-center">
              <img src={profile} alt="profile-pic" className="w-44 my-4" />
              <p className="text-base-100">{user.username}</p>
            </Link>
            <ul className="flex flex-col w-full my-5">
              <NavLink to="/dashboard">
                {({ isActive }) => (
                  <div
                    className={`flex items-center pl-10 gap-2 pb-2 border-t-2 border-secondary ${
                      isActive ? "bg-secondary" : ""
                    }`}
                  >
                    <img
                      src={isActive ? blueBrain : brain}
                      alt={isActive ? "blue-brain" : "brain"}
                    />
                    <p
                      className={`text-xl font-bold ${
                        isActive ? "text-primary" : "text-base-100"
                      }`}
                    >
                      Dashboard
                    </p>
                  </div>
                )}
              </NavLink>
              <NavLink to="/tutorials">
                {({ isActive }) => (
                  <div
                    className={`flex items-center pl-10 gap-2 py-1 border-t-2 border-secondary ${
                      isActive ? "bg-secondary" : ""
                    }`}
                  >
                    <img
                      src={isActive ? blueBook : book}
                      alt={isActive ? "blue-book" : "book"}
                    />
                    <p
                      className={`text-xl font-bold ${
                        isActive ? "text-primary" : "text-base-100"
                      }`}
                    >
                      Tutorials
                    </p>
                  </div>
                )}
              </NavLink>
              <NavLink to="/trainings">
                {({ isActive }) => (
                  <div
                    className={`flex items-center pl-10 gap-2 py-1 border-t-2 border-secondary ${
                      isActive ? "bg-secondary" : ""
                    }`}
                  >
                    <img
                      src={isActive ? blueTrain : train}
                      alt={isActive ? "blue-train" : "train"}
                    />
                    <p
                      className={`text-xl font-bold ${
                        isActive ? "text-primary" : "text-base-100"
                      }`}
                    >
                      Trainings
                    </p>
                  </div>
                )}
              </NavLink>
              <NavLink to="/eshop">
                {({ isActive }) => (
                  <div
                    className={`flex items-center pl-10 gap-2 py-1 border-y-2 border-secondary ${
                      isActive ? "bg-secondary" : ""
                    }`}
                  >
                    <img
                      src={isActive ? blueShop : shop}
                      alt={isActive ? "blue-shop" : "shop"}
                    />
                    <p
                      className={`text-xl font-bold ${
                        isActive ? "text-primary" : "text-base-100"
                      }`}
                    >
                      e-Shop
                    </p>
                  </div>
                )}
              </NavLink>
            </ul>
          </div>
        )}
      </div>
      {/* <button type="button" className="flex items-center gap-2">
        <img src={off} alt="disconnect-button" />
        <p className="text-base-100">Disconnect</p>
      </button> */}
      {user ? (
        <button
          type="button"
          className="flex items-center mb-4 gap-2"
          onClick={handleDisconnect}
        >
          <img src={off} alt="disconnect-button" />
          <p className="text-base-100 text-xl font-bold">Disconnect</p>
        </button>
      ) : (
        <div className="hover:border-b-4 hover:border-slate-800 hover:font-bold transition-all duration-300 mb-4">
          <NavLink to="/signin" className="flex items-center gap-4">
            <img src={on} alt="connexion-button" />
            <p className="text-base-100 text-xl font-bold">Connexion</p>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
