import React from 'react';
import ActiveItemContext from './ActiveItemContext';

function ListItem(props) {
  const {item} = props;
  const {activeItem, setActiveItem} = React.useContext(ActiveItemContext);   

  const handleClick =  evt => {
    evt.preventDefault();          
    setActiveItem(item);
  }

  return (    
    <a href="/" 
       onClick={handleClick} 
       className={'list-group-item list-group-item-action' + (activeItem === item ? ' active' : '')}>
      {item.name}
    </a>
  );
 
}

export default ListItem;