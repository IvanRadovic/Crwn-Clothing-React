import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { signOutUser } from "../../utils/fiebase/firebase.utils";

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

/* --- Styled Components --- */
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";



const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
          <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN-OUT</NavLink>) : 
                            (<NavLink to='/auth'>
                                SIGN-IN
                            </NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                    {isCartOpen && <CartDropDown />}
          </NavigationContainer>
          <Outlet/>
      </Fragment>
    )
}

export default Navigation;