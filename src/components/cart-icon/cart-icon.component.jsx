import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';

class CartIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartShown: false
        }
    }

    render() {
        const showCart  = this.props.showCart;
        return (
            <div className='cart-icon' onClick={() => showCart()}>
                <ShoppingIcon className='shopping-icon'/>
                <span className='item-count'>{this.props.cart.length}</span>
            </div>
        );
    }
}

export default CartIcon;