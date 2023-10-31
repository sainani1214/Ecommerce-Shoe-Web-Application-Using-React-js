import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styling/Success.module.css'
import image from '../Assets/HeaderAssets/MainPageAssets/tickmarkCart.png'
import { runFireWorks } from './Confetti'



function Success() {
  useEffect(()=>{
    runFireWorks();
  },[])
  return (
    <div className={styles.successWrapper}>
    <div className={styles.success}>
      <p className={styles.icon}>
        <img style={{width:"100px"}} src={image} alt='succesImage'/>
      </p>
      <h2>Thank you for your order!</h2>
      <p className={styles.emailMsg}>Check your email inbox for the receipt.</p>
      <p className={styles.description}>
        If you have any questions, please email
        <a className={styles.email} href="mailto:order@example.com">
          order@nike.com
        </a>
      </p>
      <Link to={'/'}>
        <button type="button" width="300px" className={styles.btn}>
          Continue Shopping
        </button>
      </Link>
    </div>
  </div>
  )
}



export default Success