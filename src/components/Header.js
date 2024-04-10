import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src={require("../../assets/unknown.jpg")}
    />
  </a>
);

const Header = () => {
  const [title, setTitle] = useState("Food Villa");

  // Will re-render this on change as react will re-render the whole component which has changed state
  console.log("render()");
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={() => setTitle("Marvels Avengers")}>Change title</button>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
