import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './components/List';
import Details from './components/Details';
import Alert from './components/Alert';

function App() {
  const [items, setItems] = React.useState([]);
  const [item, setItem] = React.useState(null);
  const [itemForDetails, setItemForDetails] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);
  const [hasError, setError] = React.useState(null);  

  React.useEffect(() => {
    fetchData(process.env.REACT_APP_URL_FOR_USERS + 'users.json', setItems);    
  },[]);

  React.useEffect(() => {
    if (item) {
      fetchData(process.env.REACT_APP_URL_FOR_USERS + item.id + '.json', setItemForDetails);       
    }    
  },[item]);  

  const fetchData = async (url, setDataProc) => {
    setLoading(true);
    try {         
      const response = await fetch(url);
      if (!response.ok) {            
        throw new Error(response.statusText);
      }         
      const data = await response.json();         
      setDataProc(data);
    } catch(e) {          
      setError('Ошибка загрузки данных: ' + e);
    } finally {
      setLoading(false);
    }
  }  

  const userClickHandler = (user) => {
    setItem(user);
  } 

  return (
    <div className="App">
      <div className="app__title">
        {isLoading && <Alert text={'Loading...'}/>}
        {hasError && <Alert text={hasError} kind={'danger'}/>}      
      </div>
      <div className="app__body">
        <List items={items} activeItem={item} itemClickHandler={userClickHandler} />
        <Details item={itemForDetails} />
      </div>
    </div>
  );
}

export default App;
