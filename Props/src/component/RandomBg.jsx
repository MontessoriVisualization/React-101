import { useState } from "react";

export default function RandomBg() {
  const [bgColor, setBgColor] = useState("#ffffff");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      
    }
    console.log(color);
    return color;
  };

  const changeBackground = () => {
    setBgColor(getRandomColor());
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.3s ease"
      }}
    >
      <button
        onClick={changeBackground}
    
      >
        Change Background
      </button>
    </div>
  );
}