import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styling/Success.module.css'

function Cancel() {
  return (
    <>
    <div style={{display:"flex", justifyContent:"center"}}>
    <h2 style={{color:"red"}}>Payment Cancelled</h2>
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
    <Link to={'/'}>
        <button type="button" width="300px" className={styles.btn}>
          Continue Shopping
        </button>
      </Link>
    </div>
    </>
  )
}

export default Cancel