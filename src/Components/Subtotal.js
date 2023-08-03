import React from "react";
import "./Subtotal.css";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { createBrowserHistory } from "history";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = createBrowserHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat //complete code
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
