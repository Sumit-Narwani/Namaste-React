import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState();
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log("JSON", json);
    console.log(
      "JSON",
      json.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
    );

    console.log(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setRestaurant(json.data?.cards[2]?.card?.card?.info);

    setMenu(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log("menu", menu);
  }

  //   console.log(restaurant.ards[2]?.card?.card?.info?.?.cloudinaryImageId);
  //   console.log(
  //     "restaurant",
  //     IMG_CDN_URL + restaurant?.cards[2]?.card?.card?.info?.id
  //   );

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="restaurant-card">
        {/* <h1>Restaurant id : {resId} </h1> */}
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>
      <h1>Menu</h1>
      <ul>
        {Object.values(menu).map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        ))}
      </ul>
      {/* <div>{restaurant.menu.items}</div> */}
    </div>
  );
};

export default RestaurantMenu;
