import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import expressApi from "../services/expressApi";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const [setUser] = useUserContext();

  const navigate = useNavigate();

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.id]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (credentials.email.length && credentials.password.length) {
      expressApi.post("/api/auth/signin", credentials).then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/");
        }
        /* else toastify */
      });
    }
    /* else toastify */
  };

  return (
    <div className="w-96 mt-24">
      <div className="flex justify-around items-center h-16">
        <div className="bg-primary w-1/2 rounded-tl-xl flex justify-center items-center h-16 text-secondary text-3xl font-bold">
          <button type="button">Log in</button>
        </div>
        <div className="bg-neutral w-1/2 rounded-tr-xl text-center flex justify-center items-center h-16 text-accent text-3xl font-bold">
          <NavLink to="/signup">Sign up</NavLink>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-l-[3px] border-b-[3px] border-r-[3px] border-accent rounded-b-xl p-4 flex flex-col gap-4"
      >
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
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary text-secondary text-2xl font-bold w-40 p-1 rounded-xl"
          >
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
