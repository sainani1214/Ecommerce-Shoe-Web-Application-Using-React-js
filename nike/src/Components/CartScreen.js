import React, { useContext, useState } from 'react';
import { ProductContext } from '../App';
import styles from '../Styling/CartScreen.module.css';
import Header1 from './Header1';
import Header2 from './Header2';
import Footer from './Footer';
import {loadStripe} from '@stripe/stripe-js/pure';


function CartScreen() {
  const { cart, setCart} = useContext(ProductContext);

  console.log(cart);
 
  const incrementCountHandler = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });

    setCart(updatedCart);
  };

  const decrementCountHandler = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        if (product.count > 1) {
          return { ...product, count: product.count - 1 };
        } else {
          return null;
        }
      }
      return product;
    });

    const newCart = updatedCart.filter((product) => product !== null);
  
    setCart(newCart);
  };
  

  

  const finalPrice = cart.map((product) => {
    const priceWithoutSpecialChars = parseFloat(product.prevPrice.replace(/[^0-9.]/g, ''));
    const totalPrice = priceWithoutSpecialChars * product.count;
    return totalPrice;
  });

  

  let total = 0;
  for(let i=0; i<finalPrice.length; i++){
    total += finalPrice[i];
  }
  
 

  const removeHandler = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const makePayment = async()=>{
    const stripe = await loadStripe("pk_test_51O56oxSJgE3QvMTT3JLMQsQI6JkW6pDxgdpsZrlGojFY2T5xtpH8QN4nMbR3UYf09paZKFMPpY945Vah9JHp9Ry800kDZYMMpd");

    const body = {
      products : cart
    }
    const headers = {
      "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:7000/api/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    })

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId:session.id
    })

     if(result.error){
        console.log(result.error)
      }
  }


  return (
    <>
      <Header1 />
      <Header2/>

      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <p className={styles.bag}>Bag</p>

          {cart.map((eachProduct, index) => (
            <>
            <div className={styles.leftPart} key={eachProduct.id}>
              <div>
                <img className={styles.cartImage} src={eachProduct.img} alt={eachProduct.title} />
              </div>
              <div className={styles.left}>
                <div className={styles.leftTitleBlock}>
                  <h4>{eachProduct.name}</h4>
                  <p>{eachProduct.title}</p>
                  <div style={{display:"flex",gap:"30px"}} >
                  <p >{eachProduct.color}</p>
                  <div style={{lineHeight:"50px"}}>
                  <button className={styles.decrement} onClick={()=>decrementCountHandler(eachProduct.id)}>-</button>
                  <h4 className={styles.count}>{eachProduct.count}</h4>
                  <button className={styles.increment} onClick={() => incrementCountHandler(eachProduct.id)}>+</button>
                  <button className={styles.remove} onClick={()=>removeHandler(eachProduct.id)}>Remove</button>
                  </div>
                  </div>
                  
                </div>
                <div className={styles.priceBlock}>
                  <h4>{`$${finalPrice[index]}+`}</h4>
                </div>
              </div>
            </div>
            <hr style={{marginLeft:"12%"}}></hr>
            </>
          ))}          
        </div>

        

        <div className={styles.rightContainer}>
          <p className={styles.summary}>Summary</p>
          <div className={styles.rightBlock1}>
            <span className={styles.total}>Subtotal</span>
            <span style={{fontWeight:"500"}}>${total}.00</span>
          </div>
          <div className={styles.rightBlock2}>
            <span >Shipping</span>
            <span>$0.00</span>
          </div>
          <div style={{marginTop:"15px"}} className={styles.rightBlock2}>
            <span  >Tax</span>
            <span>$0.00</span>
          </div>
          <hr style={{marginRight:"14%", marginLeft:"4%"}}></hr>
          <div className={styles.totalBlock}>
            <p>Total</p>
            <p style={{fontWeight:"500"}}>${total}.00</p>
          </div>
          <hr style={{marginRight:"14%", marginLeft:"4%"}}></hr>
          <button onClick={makePayment} className={styles.buyNow}>Place Order</button>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default CartScreen;



