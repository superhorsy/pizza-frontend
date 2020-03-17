import React from 'react';
import Cookies from 'js-cookie'
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {API_HOST} from '../../env';

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: []
    }
  }

  componentDidMount = async () => {
    const data = await fetch(`${API_HOST}/api/pizza/list`, {
      method: 'POST',
      credentials: "include"
    }).then(response => {
      return response.json()
    });

    this.setState({
      menu: data.payload
    });
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.menu.map((pizza,index) => (
            <MenuItem key={index} item={pizza} addItem={this.props.addItem}/>
          ))
        }
      </div>
    )
  }
}

export default Directory;