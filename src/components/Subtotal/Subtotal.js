import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Subtotal.css";
import { getBasketTotal } from '../../reducer';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    // let subtotalValue = basket.reduce((acc, value) => acc += value.price, 0)
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ( {basket.length} items ):
                            <strong> {value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            >
            </CurrencyFormat>
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
