import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Homescreen.css";
//Components
import Coin from "../components/Coin";
const Homescreen = () => {
  const [coin, setCoin] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res);
        setCoin(res.data);
        //   setInterval(getData(), 5000);
      })
      .catch((error) => console.log(error));
  }, []);

  const getData = async () => {
    console.log("this is getdata", coin);
    try {
      const coinData = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSearch = coin.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="coincontainer">
      <div className="searchbar">
        <h1 className="searchtext">Cobaltlend Crypto Tracker!</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="cinput"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredSearch.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            icon={coin.icon}
            volume={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            totalvol={coin.total_volume}
          ></Coin>
        );
      })}
    </div>
  );
};

export default Homescreen;
