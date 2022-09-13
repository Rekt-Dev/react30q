import React from "react";
export const strategyName = "PA shreddeer";

export const ActiveTrades = () => {
  const shorts = "BTC / 120 coins long";
  const longs = "ETH / 300 fake tokens short.";

  const riskLevel = "3.5/10";
  const leverage = "x12.5";
  const loans = "USDT /loan 50,000 USDT";
  return (
    <div className="">
      <div className="">
        <br />
        <h3>Active Trades:</h3>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="">{`Shorts :${shorts}`}</div>
      <div className=""> {`Longs :${longs} `}</div>
      <div className="">{`Loans : ${loans}`}</div>
      <div className="">{`Risk Level : ${riskLevel}`}</div>

      <div className="content">{`Leverage : ${leverage}`}</div>
    </div>
  );
};
