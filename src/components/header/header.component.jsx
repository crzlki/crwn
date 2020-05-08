import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.ultils'
import { ReactComponent as Logo } from '../../assets/original.svg';
import { connect } from 'react-redux'
import CartIcon  from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


import './header.styles.scss';

const Header = ({currentUser,hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser?<div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>
      :
      <Link className='option' to='/signin'>
        SIGNIN
      </Link>
    }
      <CartIcon ></CartIcon>
    </div>
    {
      hidden?null:(<CartDropdown></CartDropdown>)
    }
    
  </div>
);

// const mapStateToProps = ({ user:{ currentUser }, cart:{hidden} }) =>({ // top level root state
// currentUser,
// hidden
// })

const mapStateToProps =  createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);
