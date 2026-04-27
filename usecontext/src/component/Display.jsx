import UserContext from "../contex/userContext";
import { useContext } from "react";
const Display = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

export default Display;
