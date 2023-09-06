import { Link } from "react-router-dom";
import logo from "../assets/logo-fallout.webp";

function Navbar() {
  return (
    <div className="flex justify-between w-full pr-3 lg:pl-5 p-2 bg-primary">
      <label className="ml-1 btn btn-circle bg-primary swap swap-rotate lg:hidden">
        <input type="checkbox" />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path
            d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
            fill="#EAE4D5"
          />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
            fill="#EAE4D5"
          />
        </svg>
      </label>
      <Link to="/">
        <img src={logo} alt="logo-wcs" className="w-44" />
      </Link>
    </div>
  );
}

export default Navbar;
