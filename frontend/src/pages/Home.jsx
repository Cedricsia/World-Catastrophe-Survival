import { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import AboutUs from "../components/AboutUs";

function Home() {
  const [change, setChange] = useState(true);
  return (
    <div className="md:w-full">
      <div className="mt-24">
        <div className="border-[3px] border-accent">Site overview</div>
      </div>
      <div id="conteneur" className="md:flex md:flex-row flex-col ">
        <div
          id="pres"
          className="md:w-1/2 md:h-[50rem]  border md:flex md:justify-center md:items-start w-full "
        >
          <AboutUs />
        </div>
        <div
          id="login"
          className=" md:w-1/2   md:flex md:justify-center md:items-start"
        >
          {change ? (
            <Signin setChange={setChange} />
          ) : (
            <Signup setChange={setChange} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
