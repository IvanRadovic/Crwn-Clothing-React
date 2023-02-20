import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { signOutUser } from "../../utils/fiebase/firebase.utils";
import { UserContext } from '../../context/user.context';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
      <Fragment>
          <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutUser}>SIGN-OUT</span>) : 
                            (<Link className='nav-link' to='/auth'>
                                SIGN-IN
                            </Link>)
                    }
                </div>
          </div>
          <Outlet/>
      </Fragment>
    )
}

export default Navigation;