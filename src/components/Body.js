import { restaurantList, swiggy_api_URL } from "../constants";
import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";

// no key (not acceptable) <<<<<<<<< index key (use only if you dont have anything)<<<<<<<< unique key (best practice)

// What is State
// What are hooks
// What is useState

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  //   let searchTxt = "KFC";

  // searchText is a local state variable
  // useState() return => [variable name, function to update the variable]
  const [searchText, setsearchText] = useState(""); // To create state variables

  const [restaurants, setRestaurants] = useState(restaurantList);

  // empty dependency erray => once after render
  // dep arr [searchText] => once after initial render + everytime after render(my searchText changes)
  //   useEffect(() => {
  //     console.log("call this when dependency is changed");
  //   }, [restaurants]);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log("render");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, restaurants);

            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
          );
        })}
        {/* Destructuring-1 */}

        {/* <RestaurantCard restaurant={restaurantList[0]} />
        <RestaurantCard restaurant={restaurantList[1]} />
        <RestaurantCard restaurant={restaurantList[2]} /> */}
        {/* Destructuring-2 */}
        {/* <RestaurantCard
          name={restaurantList[0].data.name}
          cuisines={restaurantList[0].data.cuisines}
        />
        <RestaurantCard
          name={restaurantList[1].data.name}
          cuisines={restaurantList[1].data.cuisines}
        />
        <RestaurantCard
          name={restaurantList[2].data.name}
          cuisines={restaurantList[2].data.cuisines}
      /> */}

        {/* Destructuring-3 */}
        {/* <RestaurantCard {...restaurantList[0].data} />
        <RestaurantCard {...restaurantList[1].data} />
        <RestaurantCard {...restaurantList[2].data} />
        <RestaurantCard {...restaurantList[3].data} />
        <RestaurantCard {...restaurantList[4].data} />
        <RestaurantCard {...restaurantList[5].data} /> */}
      </div>
    </>
  );
};

export default Body;
