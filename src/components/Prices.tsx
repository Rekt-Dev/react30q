export const Prices = () => {
  let btcPrice = 112000;
  let ethPrice = 8677;
  let etcPrice = 478;

  return (
    <>
      <h3>Prices Component</h3>
      Pick a currency:
      <br />
      <div>
        <input type="radio" name="joe" value="seph"></input>
        <input type="radio" name="joe" value="seph"></input>
        <input type="radio" name="joe" value="seph"></input>
        <input type="radio" name="joe" value="seph"></input>
        <br />
        {` BTC Price : ${btcPrice}`}
        {` ETH Price : ${ethPrice}`}
        {` ETC Price : ${etcPrice}`}
      </div>
    </>
  );
};
