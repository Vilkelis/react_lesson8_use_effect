import React from 'react';
import UserModel from '../models/UserModel';

function Details(props) {
  const {item} = props;

  if (!item) {
    return null;
  } else {
    return (    
      <div className="Details card">
        <img src={item.avatar} className="card-img-top" alt={item.name} />
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">City: {item.details.city}</li>
              <li className="list-group-item">Company: {item.details.company}</li>
              <li className="list-group-item">Position: {item.details.position}</li>
            </ul>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  item: UserModel()
}

export default Details;