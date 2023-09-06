import { NavLink, Link } from "react-router-dom";
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

function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-primary w-[17rem] h-full min-h-screen py-5 fixed">
      <div className="flex flex-col items-center gap-2">
        <Link to="/">
          <img src={logo} alt="logo-wcs" className="w-44" />
        </Link>
        <Link to="/profile" className="flex flex-col items-center">
          <img src={profile} alt="profile-pic" className="w-44 my-4" />
          <p className="text-base-100">Nom</p>
        </Link>
      </div>
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
              <p className={isActive ? "text-primary" : "text-base-100"}>
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
              <p className={isActive ? "text-primary" : "text-base-100"}>
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
              <p className={isActive ? "text-primary" : "text-base-100"}>
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
              <p className={isActive ? "text-primary" : "text-base-100"}>
                e-Shop
              </p>
            </div>
          )}
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
