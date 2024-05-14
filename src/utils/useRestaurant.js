import { useState, useEffect } from "react";
import { FETCH_MENU } from "../constants";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState();

  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU + resId);
    const json = await data.json();
    console.log("JSON", json);
    // console.log(
    //   "RESTAURANT",
    //   json.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
    // );

    // console.log(
    //   "MENU",
    //   json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );
    setRestaurant(json.data?.cards[2]?.card?.card?.info);

    setMenu(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    // console.log("menu", menu);
  }

  // return restaurant data
  return { restaurant, menu };
};

export default useRestaurant;
