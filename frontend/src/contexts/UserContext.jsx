import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useUserContext = () => useContext(userContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
