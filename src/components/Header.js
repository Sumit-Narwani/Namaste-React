import { useState } from "react";
import Logo from "../assets/unknown.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

// const loggerInUser = () => {
//   // API call to check authentication
//   return false;
// };

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  // Will re-render this on change as react will re-render the whole component which has changed state
  // console.log("render()");
  return (
    <div className="header">
      <Title />
      {/* <h1>{title}</h1> */}
      {/* <button onClick={() => setTitle("Marvels Avengers")}>Change title</button> */}

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <Link to="/about">
            <li>About</li>
          </Link> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>Cart</li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {
        // JS Expression & Statement
        // ((a = 10), console.log(a))

        isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }
    </div>
  );
};

export default Header;
