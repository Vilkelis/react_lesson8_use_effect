import React from 'react';
import ActiveItemContext from "./ActiveItemContext";

function ActiveItemProvider(props) {
  const [activeItem, setItem] = React.useState(null); 
  
  const setActiveItem = (value) => {    
    setItem(value);
  }

  return (
    <ActiveItemContext.Provider value={{activeItem, setActiveItem}}>
      {props.children}
    </ActiveItemContext.Provider>
  );
}

export default ActiveItemProvider;

  