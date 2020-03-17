import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {API_HOST} from "../../env";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessful: false,
            name: '',
            address: '',
            phone: '',
        }
    }

    handleNameChange = function (e) {
        this.setState({name: e.target.value});
    }.bind(this)

    handleAddressChange = function (e) {
        this.setState({address: e.target.value});
    }.bind(this)

    handlePhoneChange = function (e) {
        this.setState({phone: e.target.value});
    }.bind(this)

    addOrder = async () => {
        const {cart} = this.props;

        let payload = {
            'orderList': cart.map(pizza => (pizza.id)),
            'totalPrice': cart.map(pizza => (pizza.price_usd)).reduce((a, b) => a + b, 0),
            'name': this.state.name,
            'phone': this.state.phone,
            'address': this.state.address,
        }

        fetch(`${API_HOST}/api/order/add`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)

        }).then(response => {
            return response.json()
        });

        this.setState({
            isSuccessful: true
        });
    }

    checkout() {
        return (
            <div>
                {
                    this.props.cart.map((position, index) => (
                        <div key={index}>
                            {position.name} - {position.price_usd}$
                        </div>
                    ))
                }
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter name" value={this.state.name}
                                      onChange={this.handleNameChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your credentials with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="address" placeholder="Enter address" value={this.state.address}
                                      onChange={this.handleAddressChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="phone" placeholder="Enter phone" value={this.state.phone}
                                      onChange={this.handlePhoneChange}/>
                    </Form.Group>
                </Form>
            </div>
        )
    };

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Your order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        this.state.isSuccessful ? <div>Your made your order, await your pizza!</div> :
                            <div>
                                {
                                    this.props.cart.length > 0 ? this.checkout() :
                                        <div>Nothing yet is here, please order some pizzas</div>
                                }
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Close
                    </Button>
                    {this.state.isSuccessful ? null :
                        <Button variant="primary" onClick={() => {
                            this.addOrder()
                        }}>
                            Make order
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        )
    }
}

export default Cart;