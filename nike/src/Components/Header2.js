import React, { useContext, useState } from 'react'
import styles from "../Styling/Header2.module.css"
import logo from "../Assets/HeaderAssets/NikeIcon.png"
import logo1 from "../Assets/HeaderAssets/SearchIcon.png"
import logo2 from "../Assets/HeaderAssets/HeartIcon.png"
import logo3 from "../Assets/HeaderAssets/BagIcon.png"
import { Link } from 'react-router-dom'
import { ProductContext } from '../App'

function Header2() {
  const { cart } = useContext(ProductContext);

  return (
    <>
      <div className={styles.part1}>
        <div>
          <img className={styles.logo} src={logo} alt='NikeIcon'/>
        </div>
        <div className={styles.part2}>
          <Link to={'/'}><p style={{ marginLeft: "120px" }}>New & Featured</p></Link>
          <Link to={'/men'}><p>Men</p></Link>
          <Link to={'/women'}><p>Women</p></Link>
          <Link to={'/kids'}><p>Kids</p></Link>
          <Link to={'/sale'}><p>Sale</p></Link>
          <Link to={'/customise'}><p>Customise</p></Link>
          <Link to={'/snkrs'}><p>SNKRS</p></Link>
        </div>
        <div className={styles.part3}>
          <img className={styles.logo1} src={logo1} alt='SearchIcon' />
          <input placeholder='Search' type='text'/>
        </div>
        <div className={styles.part4}>
          <img className={styles.logo2} src={logo2} alt='HeartIcon'/>
          <Link to={'/cart'}><img className={styles.logo3} src={logo3} alt='BagIcon'/></Link>
          {cart.length > 0 && (
            <div style={{ position:"absolute", textAlign: "center", marginLeft: "68px",  width:"20px", height:"20px",marginTop:"20px", backgroundColor:"black", color:"white", borderRadius:"50%",display:"flex", justifyContent:"center"}}>
              <span style={{fontSize:"12px", position:"absolute", zIndex:"9999", fontWeight:"600", marginTop:"2px", textAlign:"center"}}>
              {cart.length}
            </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header2;
