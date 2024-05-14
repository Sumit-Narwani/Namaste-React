import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  //   const [restaurant, setRestaurant] = useState(null);
  //   const [menu, setMenu] = useState();

  const { restaurant, menu } = useRestaurant(resId);

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
