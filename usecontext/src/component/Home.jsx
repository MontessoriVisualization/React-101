import React from "react";
import UserContext from "../contex/userContext";

const Home = () => {
  const { user } = React.useContext(UserContext);
  if (!user.username) {
    return null;
  }
  return (
    <div className="w-screen h-screen bg-orange-100 dark:bg-gray-800 dark:text-white">
      Home
    </div>
  );
};

export default Home;
