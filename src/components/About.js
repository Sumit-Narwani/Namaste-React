import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

// const About2 = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>This is the Namaste React Live Course Chapter 7 Finding the path</p>
//       <ProfileFunctionalComponent name={"Sumit"} />
//       <Profile name={"Sumit"} abc={"ABC"} />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent - Constructor");
  }

  componentDidMount() {
    // Best place to make an api call
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the Namaste React Live Course Chapter 7 Finding the path</p>
        <ProfileFunctionalComponent />
        {/* <Profile name={"Sumit"} abc={"ABC"} /> */}
      </div>
    );
  }
}
export default About;
