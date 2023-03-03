import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';


/* --- Styled Components ---- */
import { ProductCardContainer, FooterProduct, FooterName, FooterPrice } from './product-card.style';
import Button from '../button/button.component'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <FooterProduct>
                <FooterName>{name}</FooterName>
                <FooterPrice>{price}</FooterPrice>
            </FooterProduct>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;