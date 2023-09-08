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

function Sidebar() {
  const [user, setUser] = useUserContext();

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
    <nav>
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
                      <h1
                        className={`text-xl font-bold ${
                          isActive ? "text-primary" : "text-base-100"
                        }`}
                      >
                        Dashboard
                      </h1>
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
                      <h1
                        className={`text-xl font-bold ${
                          isActive ? "text-primary" : "text-base-100"
                        }`}
                      >
                        Tutorials
                      </h1>
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
                        alt={isActive ? "blue-train" : "trainning page"}
                      />
                      <h1
                        className={`text-xl font-bold ${
                          isActive ? "text-primary" : "text-base-100"
                        }`}
                      >
                        Trainings
                      </h1>
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
                        alt={isActive ? "blue-shop" : "shop page"}
                      />
                      <h1
                        className={`text-xl font-bold ${
                          isActive ? "text-primary" : "text-base-100"
                        }`}
                      >
                        e-Shop
                      </h1>
                    </div>
                  )}
                </NavLink>
              </ul>
            </div>
          )}
        </div>

        {user && (
          <button
            type="button"
            className="flex items-center mb-4 gap-2"
            onClick={handleDisconnect}
          >
            <img src={off} alt="disconnect-button" />
            <h1 className="text-base-100 text-xl font-bold">Disconnect</h1>
          </button>
        )}
      </div>
    </nav>
  );
}

export default Sidebar;
