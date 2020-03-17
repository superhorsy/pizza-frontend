import React from 'react';
import './menu-item.styles.scss';
import {API_HOST} from '../../env';
import {Card, Button} from 'react-bootstrap';

class MenuItem extends React.Component {
    render() {
        const {name, price_usd, description, photo} = this.props.item;
        const addItem = this.props.addItem;
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={API_HOST + photo}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">${price_usd}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => addItem(this.props.item)} variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default MenuItem;
