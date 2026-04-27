import React from "react";
import UserContextProvider from "./contex/UserContext.jsx";
import Display from "./component/Display";
import Login from "./component/Login";

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <Login />
        <Display />
      </div>
    </UserContextProvider>
  );
};

export default App;
