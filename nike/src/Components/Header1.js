import React from 'react'
import logo from "../Assets/HeaderAssets/JordanLogo.png"
import styles from "../Styling/Header1.module.css"
import { Link } from 'react-router-dom'

function Header1() {
  return (
    <>
    <div className={styles.part1}>
      <div>
        <img className={styles.logo} src={logo} alt='jordanImage'/> 
      </div>
      <div className={styles.part2}>
      <div>
      <Link to={'/find a store'}><h6>Find a Store</h6></Link>
      </div>
      <div >
      <Link to={'/help'}><h6>Help</h6></Link>
      </div>
      <div>
      <Link to={'/join'}><h6>Join Us</h6></Link>
      </div>
      <div>
      <Link to={'/signin'}><h6 style={{marginRight:"30px"}}>Sign In</h6></Link>
      </div>
        
      </div>

    </div>
    </>
  )
}

export default Header1