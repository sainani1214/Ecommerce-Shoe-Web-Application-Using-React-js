import './App.css';
import '../src/Styling/styles.css'
import NavigationStack from './Components/NavigationStack';
import { useState } from 'react';
import { createContext } from 'react';

export const ProductContext = createContext();

function App() {
  const [data,setData] = useState([]);
  const [cart,setCart] = useState([]);
  const [showNotification,setShowNotification] = useState(false);
  const [itemExistsNotification,setItemExistsNotification] = useState(false);
  const [signIn,setSignIn] = useState(false);

  const viewProductHandler=(data)=>{
    setData(data)
  }

  const signInHandler=()=>{
    setSignIn(true)
  }

  const addToCartHandler=(product)=>{
    const itemExists = cart.find((eachItem)=>eachItem.id === product.id);

    if(itemExists){
      setItemExistsNotification(true);
      setTimeout(()=>{
        setItemExistsNotification(false)
      },1000)
    }else{
      setCart([...cart,product]);
      setShowNotification(true);
      setTimeout(()=>{
        setShowNotification(false)
      },1000)
    }    
  }

  return (
    <>
    <ProductContext.Provider value={{data,viewProductHandler,cart,setCart,addToCartHandler,showNotification,itemExistsNotification,signIn,signInHandler}}>
    <NavigationStack/>
    </ProductContext.Provider>
   
    
    
    
    </>
  );
}

export default App;
