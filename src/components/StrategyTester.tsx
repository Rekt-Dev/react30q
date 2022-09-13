import "../styles.css";
import { strategyName } from "./ActiveTrades";
export const StrategyTester = () => {
  return (
    <div className="#container">
      <div>
        <h3>Strategy Tester : </h3>

        <>{`Strategy Name: ${strategyName}`}</>
      </div>
    </div>
  );
};
