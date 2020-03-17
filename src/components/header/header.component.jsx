import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';
import CartItem from '../cart-icon/cart-icon.component';
import {API_HOST} from "../../env";

class Header extends React.Component {
    signUserIn() {
        window.addEventListener("message", receiveMessage, false);

        window.open(`${API_HOST}/auth/redirect`, 'child', 'width=600,height=400,left=200,top=200')

        function receiveMessage(event) {
            console.log(event.data)
        }
    }

    signUserOut() {
        window.addEventListener("message", receiveMessage, false);

        window.open(`${API_HOST}/auth/redirect`, 'child', 'width=600,height=400,left=200,top=200')

        function receiveMessage(event) {
            console.log(event.data)
        }
    }

    render() {
        return (
            <div className='header'>
                <div className='logo-container'>
                    <Logo className='logo'/>
                </div>

                <div className='options'>
                    {
                        this.props.currentUser ?
                            <div className='option' onClick={() => this.signUserOut()}>SIGN OUT</div>
                            :
                            <div className='option' onClick={() => this.signUserIn()}>SIGN IN</div>
                    }
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
