import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';
import CartItem from '../cart-icon/cart-icon.component';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='logo-container'>
                    <Logo className='logo'/>
                </div>

                <div className='options'>
                    {
                        this.props.cart.length > 0 ?
                            <CartItem cart={this.props.cart} showCart={this.props.showCart}/>
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}

export default Header;
