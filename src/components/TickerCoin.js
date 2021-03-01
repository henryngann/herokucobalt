import React from "react";

const TickerCoin = (props) => {
  return (
    <div className="ticker-item">
      <div className="coinContainer">
        <p>{props.symbol}</p>
        <p>${props.price}</p>
        {props.priceChange < 0 ? (
          <p className="coinpercent-red">{props.priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coinpercent-green">{props.priceChange.toFixed(2)}%</p>
        )}
      </div>
    </div>
  );
};

export default TickerCoin;
