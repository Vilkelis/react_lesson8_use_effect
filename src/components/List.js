import React from 'react';
import PropTypes from 'prop-types';
import UserModel from '../models/UserModel';
import ListItem from './ListItem';

function List(props) {
  const {items, activeItem, itemClickHandler} = props;  
  
  if (items) {
    return (      
      <div className="List list-group">
        {items.map( (item) => <ListItem key={item.id} 
                                        item={item} 
                                        active={item === activeItem} 
                                        itemClickHandler={itemClickHandler} />)}
      </div>
    );
  } else {
    return null;
  }
}
 
List.propTypes = {
  items: PropTypes.arrayOf(UserModel()).isRequired,
  activeItem: UserModel(),
  itemClickHandler: PropTypes.func.isRequired
}

export default List;