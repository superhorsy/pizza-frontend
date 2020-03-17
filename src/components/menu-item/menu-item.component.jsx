import React from 'react';
import './menu-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {API_HOST} from '../../env';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, price_usd, description, photo} = this.props.item;
        const addItem  = this.props.addItem;
        return (
            <div className='menu-item'>
                <div className='item-body'>
                    <div
                        className='background-image'
                        style={{
                            backgroundImage: `url(${API_HOST}${photo})`
                        }}
                    />
                    <p className='content'>
                        {description}
                    </p>
                </div>
                <div className='item-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{`$${price_usd}`}</span>
                </div>
                <CustomButton inverted onClick={() => addItem(this.props.item)}>Add to Cart</CustomButton>
            </div>
        );
    }
}

export default MenuItem;
