import React from 'react';
import PropTypes from 'prop-types';
import UserModel from '../models/UserModel';

function ListItem(props) {
  const {item, active, itemClickHandler} = props;

  const handleClick =  evt => {
    evt.preventDefault();
    itemClickHandler(item);
  }

  return (    
    <a href="/" 
       onClick={handleClick} 
       className={'list-group-item list-group-item-action' + (active ? ' active' : '')}>
      {item.name}
    </a>
  );
 
}

ListItem.propTypes = {
  item: UserModel().isRequired,
  active: PropTypes.bool,
  itemClickHandler: PropTypes.func.isRequired 
}

export default ListItem;