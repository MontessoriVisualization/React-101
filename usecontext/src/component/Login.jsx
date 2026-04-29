import React from "react";
import UserContext from "../contex/userContext";
import { useContext, useRef } from "react";
const Login = () => {
  const { Login, setLogin } = useContext(UserContext);
  const usernameRef = useRef();
  const passwordRef = useRef();
  if (Login) {
    return <button onClick={() => setLogin(null)}>Logout</button>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    // Handle login logic here
    setLogin({ username: username, password: password });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" ref={usernameRef} />

      <input type="password" placeholder="Password" ref={passwordRef} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
