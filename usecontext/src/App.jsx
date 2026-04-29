import React from "react";
import UserContextProvider from "./contex/UserContext.jsx";
import Display from "./component/Display";
import Login from "./component/Login";
import Home from "./component/Home";
import DarkToggle from "./component/DarkToggle";

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <Login />
        <Display />
        <DarkToggle />
        <Home></Home>
      </div>
    </UserContextProvider>
  );
};

export default App;
