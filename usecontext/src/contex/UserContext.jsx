import React from "react";
import UserContext from "./userContext";
import { useEffect } from "react";

const UserContextProvider = ({ children }) => {
  const [Login, setLogin] = React.useState(null);
  const [user, setUser] = React.useState({ username: "", password: "" });
  function handleLogin(username, password) {
    if (username === "admin" && password === "admin") {
      console.log("Login successful");
      setUser({ username: username, password: password });
    } else {
      console.log("Login failed");
    }
  }
  useEffect(() => {
    if (Login) {
      handleLogin(Login.username, Login.password);
    } else {
      console.log("No login information provided");
    }
  }, [Login]);

  return (
    <UserContext.Provider value={{ Login, setLogin, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
