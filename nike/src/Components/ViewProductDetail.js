import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../App";
import styles from "../Styling/ProductDetail.module.css"
import Header1 from "./Header1";
import Header2 from "./Header2";
import cartTickMark from "../Assets/HeaderAssets/MainPageAssets/tickmarkCart.png"

function ViewProductDetail() {
  const { productId } = useParams();
  const { data,addToCartHandler,showNotification,itemExistsNotification } = useContext(ProductContext);
  

  
  const product = data.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
   <>
    {
    showNotification && (
      <div style={{width:"200px", height:"60px", position:"absolute",marginLeft:"41%", marginTop:"2%", backgroundColor:"black",color:"white",display:"flex",gap:"5px", justifyContent:"center",borderRadius:"20px" }}>
        <h4 >Added to bag</h4>
        <img style={{width:"20px",height:"20px", marginTop:"20px"}} src={cartTickMark} alt={"added"}/>
      </div>
    )}
     {
    itemExistsNotification && (
      <div style={{width:"200px", height:"60px", position:"absolute",marginLeft:"41%", marginTop:"2%", backgroundColor:"black",color:"white",display:"flex",gap:"5px", justifyContent:"center",borderRadius:"20px" }}>
        <h4 >Item already exists</h4>
      </div>
    )}
   <Header1/>
   <Header2/>
   <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
       <img  src={product.img} alt={product.category} />
      </div>


      <div className={styles.rightContainer}>
      <p className={styles.name}>{product.name}</p>  
      <h2 className={styles.title}>{product.title}</h2>
      <div className={styles.priceContainer}>
      <h4 className={styles.price}>{product.prevPrice}</h4>
      </div>
      <p className={styles.about}>ABOUT THIS PRODUCT</p>
      <p className={styles.para}>Originally released in 1993 when MJ wore it during his third NBA Finals win over <br></br> the Phoenix Suns, the Air Jordan 8 Retro 'Playoff' returns true to form in 2023.<br></br> The upper in black nubuck is embellished with graphic-imbued TPU overlays in white, black and True Red. The plush chenille tongue patch on the Jordan 8 'Playoff' features a Jumpman in red, while ‘23’ in stitching adorns the cross-straps. A black foam midsole with interior Air-sole cushioning rides on a colorful rubber outsole which echoes the overlay graphics and includes a Jumpman logo in gold.</p>
      <button  onClick={()=>{addToCartHandler(product)}} className={styles.cartButton}>Add To Cart</button>
      <button className={styles.buyButton}>Buy Now</button>
      </div>
   </div>

  
   </>
  );
}

export default ViewProductDetail;

