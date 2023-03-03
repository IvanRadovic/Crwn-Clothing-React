import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

// import './checkout-page.style.scss';

/* ---- styled Components ---- */
import { CheckOutContainer, CheckouHeader, HeaderBlock, Total } from './checkout-page.style';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckOutContainer>
            <CheckouHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckouHeader>
            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <Total as='span'>TOTAL : $ {cartTotal}</Total>
        </CheckOutContainer>
    )
}

export default Checkout;