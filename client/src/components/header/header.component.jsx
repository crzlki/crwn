import React from 'react';


import { ReactComponent as Logo } from '../../assets/original.svg';
import { connect } from 'react-redux'
import CartIcon  from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { signOutStart } from '../../redux/user/user.actions'
import { HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink } from './header.styles'

// import './header.styles.scss';

const Header = ({currentUser,hidden,signOutStart}) => {

  return (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className ='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/contact'>
        CONTACT
      </OptionLink>
      {/*OptionLink as='div' */}
      { currentUser? (
        <OptionDiv onClick={() => {signOutStart()}}> 
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
const mapDispatchToProps = dispatch => ({
  signOutStart: ()=> dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);
