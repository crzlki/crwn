import React from 'react';

import {auth} from '../../firebase/firebase.ultils'
import { ReactComponent as Logo } from '../../assets/original.svg';
import { connect } from 'react-redux'
import CartIcon  from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink } from './header.styles'

// import './header.styles.scss';

const Header = ({currentUser,hidden}) => {

  return (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className ='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {/*OptionLink as='div' */}
      { currentUser? (
        <OptionDiv onClick={() => auth.signOut()}> 
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon ></CartIcon>
    </OptionsContainer>
    {
      hidden?null:(<CartDropdown></CartDropdown>)
    }
    
  </HeaderContainer>
)}

// const mapStateToProps = ({ user:{ currentUser }, cart:{hidden} }) =>({ // top level root state
// currentUser,
// hidden
// })

const mapStateToProps =  createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);
