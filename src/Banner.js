import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
//import { useHistory } from "react-router-dom";

function Banner() {
  //const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images.hdqwalls.com/download/cozy-little-house-in-mountains-4k-3h-2560x1440.jpg"
          
        )`,
        backgroundPosition: "center center",
        // "https://images.hdqwalls.com/wallpapers/airbnb-in-the-90s-uc.jpg"
      }}
    >
      <div className="banner__search">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Go Near</h1>
        <h4>
          Settle in somewhere new. Discover stays to live, work, or just relax.
        </h4>
        <Button className="banner__infoButton" variant="outlined">
          {/* onClick={() => history.push("/search")}  */}
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
