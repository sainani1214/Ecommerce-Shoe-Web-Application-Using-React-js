import React from 'react'
import styles from '../Styling/Footer.module.css'

function Footer() {
  return (
    <>
    <div className={styles.mainContainer}>

     <div className={styles.mainDiv}>

        <div className={styles.firstDiv}>
          <h5>FIND A STORE</h5>
          <h5>BECOME A MEMBER</h5>
          <h5>Send Us Feedback</h5>
        </div>

        <div className={styles.secondDiv}>
          <h5>GET HELP</h5>
          <p>Order Status</p>
          <p>Delivery</p>
          <p>Returns</p>
          <p>Payment Options</p>
          <p>Contact Us On Nike.com Inquiries</p>
          <p>Contact Us On All Other Inquiries</p>
        </div>

        <div className={styles.thirdDiv}>
          <h5>ABOUT NIKE</h5>
          <p>News</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Sustainability</p>
        </div>

     </div>

     <div className={styles.bottomDiv}>
        <p>2023 Nike, Inc. All Rights Reserved</p>
        <div className={styles.bottomRightDiv}>
          <p>Guides</p>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Nike Privacy Policy</p>
        </div>
     </div>

    </div>
    </>
  )
}

export default Footer