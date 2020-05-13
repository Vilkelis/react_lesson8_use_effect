import React from 'react';
import UseJsonFetch from '../hooks/UseJsonFetch';
import Alert from './Alert';
import ListItem from './ListItem'; 

function List() {
  const url = process.env.REACT_APP_URL_FOR_USERS + 'users.json';
  const [items, isLoading, hasError] = UseJsonFetch(url);     

  if (!items) {
    return (       
      <div className="app__title">
        {isLoading && <Alert text={'Loading...'}/>}
        {hasError && <Alert text={hasError} kind={'danger'}/>}      
      </div>       
    );
  } else {
    return (
      <div className="List list-group">
        {items.map( (item) => <ListItem key={item.id} item={item} />)}
      </div>        
    );
  }

}
 
export default List;