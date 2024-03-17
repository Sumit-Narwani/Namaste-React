/*
 * PARCEL
 * Created a server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning out code ( removing console logging)
 * Dev and Production Build
 * Super Fast build Algorithm
 * Image Optimization
 * Caching while development
 * Compreession
 * Compatible with older versions of browser using polyfills
 * HTTPS on dev
 * manages port number
 * Consistent Hashing Algorithms
 * zero config bundler
 * Tree Shaking - Removing unwanted code
 */

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 1 for parcel"
);

// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//         key: "div",
//     },
//     [
//         React.createElement(
//             "h1",
//             {
//                 id: "title",
//                 key: "h2",
//             },
//             "Namastey React"
//         ),
//         React.createElement(
//             "h1",
//             {
//                 id: "title",
//                 key: "h2",
//             },
//             "Namastey React"
//         ),
//         React.createElement(
//             "h1",
//             {
//                 id: "title",
//                 key: "h2",
//             },
//             "Namastey React"
//         ),
//     ]
// );

// const heading2 = React.createElement(
//     "h1",
//     {
//     id: "title",
//     key: "h2",
//     },
//     "Heading 2");

// const container = React.createElement(
//     "div",
//     {
//     id: "container",  // PROPS
//     hello: "world",
//     },
//     [heading1, heading2]);

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h2",
  },
  "Namastey React"
);

// JSX => React.createElement => Object => HTML(DOM
// React Component
// Functional - NEW
// Class Based Component - OLD
// Name of the component starts with capital letter - it's not mandatory

// WAY-1
const HeaderComponent = () => {
  return (
    <div>
      <h1> Namaste React Functional Component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};


// REACT element
// const title = (
//   <h1 id="title" key="h2">
//     Namaste React
//   </h1>
// );

// REACT functional component
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// WAY-2
const HeaderComponent2 = () => (
  <div>
    <Title />
    {/* {1 + 2} */}
    <h1> Namaste React Functional Component</h1>
    <h2>This is a h2 tag</h2>
  </div>
);

// WAY-3
// const HeaderComponent3 = function () {
//   return (
//     <div>
//       <h1> Namaste React Functional Component</h1>
//       <h2>This is a h2 tag</h2>
//     </div>
//   );
// };

// React element, if we add () => then it becomes functional component
const heading2 = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);
// Passing a react element inside the root
// root.render(heading);
root.render(<HeaderComponent2 />);
