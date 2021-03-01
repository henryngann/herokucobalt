import React from "react";
import "./Coin.css";
const Coin = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="coin">
          <img src={props.image} alt="cryptocurrency" />
          <h1>{props.name}</h1>
          <p className="coinicon">{props.icon}</p>
        </div>
        <div className="coindesc">
          <p className="coinprice">${props.price}</p>
          <p className="coinvolume">Volume: {props.volume.toLocaleString()}</p>

          {props.priceChange < 0 ? (
            <p className="coinpercent-red">{props.priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coinpercent-green">{props.priceChange.toFixed(2)}%</p>
          )}
          <p className="coinmarketcap">
            Mkt Cap: ${props.totalvol.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
