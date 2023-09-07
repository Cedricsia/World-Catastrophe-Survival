import { useState } from "react";

function Signin() {
  const [credentials, setCredentials] = useState({});
  console.info(credentials);
  const handleChange = (evt) => {
    setCredentials(evt.target.value);
  };

  return (
    <div className="w-96">
      <div className="flex justify-around items-center h-16">
        <div className="bg-primary w-1/2 rounded-tl-xl flex justify-center items-center h-16 text-secondary text-3xl font-bold">
          <button type="button">Log in</button>
        </div>
        <div className="bg-neutral w-1/2 rounded-tr-xl text-center flex justify-center items-center h-16 text-accent text-3xl font-bold">
          <button type="button">Sign in</button>
        </div>
      </div>
      <form className="border-l-[3px] border-b-[3px] border-r-[3px] border-accent rounded-b-xl p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-2xl text-primary font-bold ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="bg-base-100 border-[3px] border-primary w-80 h-10 rounded-xl p-2 text-2xl text-primary"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-2xl text-primary font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="bg-base-100 border-[3px] border-primary w-80 h-10 rounded-xl p-2 text-2xl text-primary"
          />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Signin;
