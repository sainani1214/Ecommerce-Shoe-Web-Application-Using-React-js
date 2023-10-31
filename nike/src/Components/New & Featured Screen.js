import React from 'react'
import Header1 from './Header1'
import Header2 from './Header2'
import Header3 from './Header3'
import image1 from '../Assets/HeaderAssets/MainPageAssets/image.jpg'
import image2 from '../Assets/HeaderAssets/MainPageAssets/nike-debuts-its-vaporfly-3-racing-shoe.jpg'
import image3 from '../Assets/HeaderAssets/MainPageAssets/what-to-wear-to-an-ice-hockey-game-5-outfit-ideas.jpg'
import styles from '../Styling/New&FeaturedPage.module.css'
import nikeAd from '../Assets/Video/Nike Ad.mp4'
import { Link } from 'react-router-dom'
import Footer from './Footer'



function NewFeatured() {
  return (
    <>
    <Header1/>
    <Header2/>
    <Header3/>

    <div className={styles.imageBlock}>  
    <img className={styles.image1} src={image1} alt='man-exercise-i-mage'/>
    </div>

     {/* <img className={styles.image1} src={image2} alt='man-exercise-i-mage'/>  */}
    {/* <img className={styles.image1} src={image3} alt='man-exercise-i-mage'/>  */}

    <div className={styles.headingContainer}>
      <h1 className={styles.nikeHeading}>NIKE ZOOM TR1</h1>
      <p className={styles.para}>Light and responsive. Built for your workout and beyond.</p>
      <Link to={'/men'}><button>Shop</button></Link>
    </div>

    <div className={styles.videoContainer}>
    <p>Featured</p>
    <video width="560" height="315" autoPlay muted loop>
        <source src={nikeAd} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className={styles.text}>
      <h1>RUN YOUR RUN</h1>
      <p>Follow the feeling that keeps you running your best in the city.</p>
      <Link to={'/men'}><button>Shop Apparel</button></Link>
      <Link to={'/sale'}><button style={{marginLeft:"10px"}}>Shop Footwear</button></Link>
    </div>

    <div style={{marginTop:"4%"}} className={styles.imageBlock}>  
    <img style={{marginBottom:"40px"}} className={styles.image1} src={image2} alt='man-exercise-i-mage'/>
    </div>

    <Footer/>
    </>
  )
    
}

export default NewFeatured