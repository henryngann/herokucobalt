import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Ticker.css";
import TickerCoin from "./TickerCoin";
const Ticker = () => {
  const [tickerData, setTickerData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setTickerData(res.data);
        console.log(tickerData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="tcontainer">
        <div className="ticker-wrap">
          <div className="ticker-move">
            {tickerData.map((coin) => {
              return (
                <>
                  <TickerCoin
                    key={coin.id}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                  ></TickerCoin>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticker;
