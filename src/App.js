import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Cart from "./components/cart/cart.component";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            cart: [],
            isCartShown: false
        };
        this.addItem = this.addItem.bind(this)
    }

    addItem(item) {
        this.setState(function (state, props) {
            return ({
                cart: state.cart.concat(item)
            });
        });
    }

    showCart() {
        this.setState({
            isCartShown: true
        });
    }

    render() {
        let hideCart = () => this.setState({isCartShown: false});
        return (
            <div>
                <Cart
                    show={this.state.isCartShown}
                    onHide={hideCart}
                    cart={this.state.cart}
                >
                </Cart>
                <Header currentUser={this.state.user} cart={this.state.cart} showCart={this.showCart.bind(this)}/>
                <HomePage addItem={this.addItem}/>
            </div>
        );
    }
}

export default App;
