import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";

// import { Title, Header } from "./components/Header";
// import Header, { Title } from "./components/Header";

// Default import
// import Header from "./components/Header";
// Named import
// import { Title } from "./components/Header";

/**
        Header
          - Logo
          - Nav Items (Right side)
          - Cart
        
        Body
          - Search bar
          - RestaurantList
            - Restaurant Card
              - Image
              - Name
              - Rating
              - Cuisines
        Footer 
          - Links
          - Copyright
*/

// const Title = () => (
//   //   <h1 id="title" key="h2">
//   //     Food Villa
//   //   </h1>
//   <a href="/">
//     <img className="logo" alt="logo" src={require("../assets/unknown.jpg")} />
//   </a>
// );

// Config Driven UI

const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delivery Charge",
      },
    ],
  },
  {
    type: "restaurants",
    cards: [
      {
        name: "Burger King",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        cuisines: ["Burger", "American"],
        rating: "4.2",
      },
      {
        name: "Burger King",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        cuisines: ["Burger", "American"],
        rating: "4.2",
      },
    ],
  },
];

// const restaurantList1 = [
//   {
//     name: "Burger King",
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cuisines: ["Burger", "American"],
//     rating: "4.2",
//   },
//   {
//     name: "Burger King",
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cuisines: ["Burger", "American"],
//     rating: "4.2",
//   },
//   {
//     name: "Burger King",
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cuisines: ["Burger", "American"],
//     rating: "4.2",
//   },
// ];



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// const jsx = (
//     <div>
//         <h1>JSX</h1>
//         <h1>Second JSX</h1>
//     </div>
// )

// React Fragment
// const jsx = (
//     <React.Fragment>
//         <h1>JSX</h1>
//         <h1>Second JSX</h1>
//     </React.Fragment>
// )

// jsx - one parent

// const styleObj = {
//   border: "1px solid red",
// };

// Inline styling in React
// const jsx = (
//   <div style={{ backgroundColor: "yellow" }}>
//     <h1>JSX</h1>
//     <h1>Second JSX</h1>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent />);
// root.render(jsx);
root.render(<AppLayout />);
