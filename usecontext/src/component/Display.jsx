import UserContext from "../contex/userContext";
import { useContext } from "react";
const Display = () => {
  const { user } = useContext(UserContext);
  if (!user.username) {
    return;
  }
  return (
    <div>
      <h2>hi {user.username}</h2>
    </div>
  );
};

export default Display;
