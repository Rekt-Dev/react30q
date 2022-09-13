import React from "react";

export const Balances = (type: any) => {
  let btcBalance = 14.5;
  let ethBalance = 128.1;

  return (
    <div className="content">
      <h3> Balances</h3>
      <>
        <input type="date/month/week/time" name="Financial Calendar"></input>
      </>
      <div className="">{`BTC balance: ${btcBalance} `}</div>
      <div className=""> {`ETH balance: ${ethBalance} `}</div>
    </div>
  );
};
