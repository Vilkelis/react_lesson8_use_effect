import React from 'react';
import ActiveItemContext from './ActiveItemContext';
import UseJsonFetch from '../hooks/UseJsonFetch';
import Alert from './Alert';

function Details(props) {
  const {activeItem} = React.useContext(ActiveItemContext);     
  const url = (activeItem ? process.env.REACT_APP_URL_FOR_USERS + activeItem.id  + '.json' : null);
  
  const [itemForDetails, isLoading, hasError] = UseJsonFetch(url);

  if (!itemForDetails) {
    return (
      <div className="app__title">
        {isLoading && <Alert text={'Loading...'}/>}
        {hasError && <Alert text={hasError} kind={'danger'}/>}      
      </div>
    );
  } else {
    return (    
      <div className="Details card">              
        <img src={itemForDetails.avatar} className="card-img-top" alt={itemForDetails.name} />
        <div className="card-body">
            <h5 className="card-title">{itemForDetails.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">City: {itemForDetails.details.city}</li>
              <li className="list-group-item">Company: {itemForDetails.details.company}</li>
              <li className="list-group-item">Position: {itemForDetails.details.position}</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Details;