import React from 'react';

const ActiveItemContext = React.createContext({activeItem: null, setActiveItem: (item) => {}});
export default ActiveItemContext;