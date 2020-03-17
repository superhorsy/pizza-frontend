import React from 'react';
import './homepage.styles.scss';
import Directory from '../components/directory/directory.component';

class HomePage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <h1 className='title'>The Pin-up Pizza</h1>
                <Directory addItem={this.props.addItem}/>
            </div>
        );
    }
}

export default HomePage;
