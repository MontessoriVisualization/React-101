import React from "react";

const DarkToggle = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return <button onClick={handleClick}>Toggle Dark Mode</button>;
};

export default DarkToggle;
