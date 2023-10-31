import React, { useContext, useEffect, useState } from 'react'
import Header1 from './Header1'
import Header2 from './Header2'
import Header3 from './Header3'
import { ProductContext } from '../App'
import styles from '../Styling/MenScreen.module.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const data = [
  {
    id : 25,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/244675/1.jpg",
    name: "Air Jordan",
    title: "WMNS AIR JORDAN 3 RETRO",
    reviews: "(123 reviews)",
    prevPrice: "$282+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 26,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/359585/1.jpg",
    name: "Air Jordan",
    title: "WMNS AIR JORDAN 1 LOW",
    reviews: "(123 reviews)",
    prevPrice: "$129+",
    color: "Pink",
    category: "sneakers",
  },
  {
    id : 27,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/295911/1.jpg",
    name: "Air Jordan",
    title: "WMNS AIR FORCE LV 8",
    reviews: "(123 reviews)",
    prevPrice: "$400+",
    color: "Pink",
    category: "sneakers",
  },
  {
    id : 28,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/341694/1.jpg",
    name: "Air Jordan",
    title: "WMNS JORDAN DELTA 3 LOW",
    reviews: "(123 reviews)",
    prevPrice: "$69+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 29,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/294586/1.jpg",
    name: "Nike",
    title: "WMNS AIR MAX 90 SE",
    reviews: "(123 reviews)",
    prevPrice: "$69+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 30,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/269328/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 3 RETRO SP",
    reviews: "(123 reviews)",
    prevPrice: "$75+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 31,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/261280/1.jpg",
    name: "Air Jordan",
    title: "CURRY FLOW 8",
    reviews: "(123 reviews)",
    prevPrice: "$157+",
    color: "Pink",
    category: "sneakers",
  },
  {
    id : 33,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/270066/1.jpg",
    name: "Air Jordan",
    title: "WMNS AIR JORDAN 1 LOW WHITE",
    reviews: "(123 reviews)",
    prevPrice: "$121+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 34,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/317417/1.jpg",
    name: "Air Jordan",
    title: "WMNS AIR JORDAN 4 RETRO",
    reviews: "(123 reviews)",
    prevPrice: "$200+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 35,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/338727/1.jpg",
    name: "Air Jordan",
    title: "WMNS DUNK LOW 'LIGHT IRON'",
    reviews: "(123 reviews)",
    prevPrice: "$100+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 36,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/362402/1.jpg",
    name: "Air Jordan",
    title: "WMNS DUNK LOW 'NEXT NATURE'",
    reviews: "(123 reviews)",
    prevPrice: "$114+",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 37,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/337630/1.jpg",
    name: "Air Jordan",
    title: "WMNS AIR JORDAN 1 LOW ICE",
    reviews: "(123 reviews)",
    prevPrice: "$116+",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 38,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/354557/1.jpg",
    name: "Air Jordan",
    title: "WMNS DUNK LOW 'PINK PAISLEY'",
    reviews: "(123 reviews)",
    prevPrice: "$101+",
    color: "Pink",
    category: "sneakers",
  },
  {
    id : 39,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/347352/1.jpg",
    name: "Air Jordan",
    title: "WMNS GAZELLE BLOW 'PINK'",
    reviews: "(123 reviews)",
    prevPrice: "$120+",
    color: "Pink",
    category: "sneakers",
  },
  {
    id : 40,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/369980/1.jpg",
    name: "Nike",
    title: "WMNS DUNK LOW '520 PINK'",
    reviews: "(123 reviews)",
    prevPrice: "$100+",
    color: "Pink",
    category: "sneakers",
  },
]

const updatedData =  data.map((wholeData)=>{
  return(
    {...wholeData,count : 1}
  )
})

function WomenScreen() {
  const getData = useContext(ProductContext)
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [filteredData, setFilteredData] = useState(data);



  const modelHandler = (event) => {
    setModel(event.target.value);
    filterProducts(event.target.value, price, color);
  };



  const priceHandler = (event) => {
    setPrice(event.target.value);
    filterProducts(model, event.target.value, color);
  };



  const colorHandler = (event) => {
    setColor(event.target.value);
    filterProducts(model, price, event.target.value);
  };




  const filterProducts = (model, price, color) => {
    const filteredProducts = data.filter((product) => {
      const modelMatch = model === "" || product.name === model;
      const colorMatch = color === "" || product.color === color;

  
      const numericPrevPrice = parseFloat(product.prevPrice.match(/\d+/));
      let minPrice, maxPrice;
      if (price !== "") {
        const priceRange = price.split(" - ");
        if (priceRange.length === 2) {
          minPrice = parseFloat(priceRange[0].replace("$", ""));
          maxPrice = parseFloat(priceRange[1].replace("$", ""));
        }
      }

      const priceMatch =
        price === "" || (minPrice <= numericPrevPrice && numericPrevPrice <= maxPrice);

      return modelMatch && colorMatch && priceMatch;
    });

    setFilteredData(filteredProducts);
  };




 
  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />

      <div className={styles.mainContainer}>
        <div className={styles.sideBar}>
          <p>FILTER</p>
          <div className={styles.model}>
            <h4>Brand</h4>
            <select className={styles.dropDown} value={model} onChange={(event)=>{modelHandler(event)}}>
              <option value={""}>All Brands</option>
              <option value={"Air Jordan"}>AIR JORDAN</option>
              <option value={"Nike"}>NIKE</option>
              <option value={"New Balance"}>NEW BALANCE</option>
            </select>
          </div>



          <div className={styles.price}>
            <h4>Price</h4>
            <select className={styles.dropDown1} value={price} onChange={(event)=>{priceHandler(event)}}>
            <option value={""}>All Prices</option>
              <option value={"50$ - 100$"}>50$ - 100$</option>
              <option value={"100$ - 150$"}>100$ - 150$</option>
              <option value={"150$ - 200$"}>150$ - 200$</option>
              <option value={"200$ - 250$"}>200$ - 250$</option>
              <option value={"250$ - 300$"}>250$ - 300$</option>
              <option value={"300$ - 350$"}>300$ - 350$</option>
              <option value={"350$ - 500$"}>350$ - 500$</option>
            </select>
          </div>



          <div className={styles.color}>
            <h4>Color</h4>
            <select className={styles.dropDown2} value={color} onChange={(event)=>{colorHandler(event)}}>
              <option value={""}>All Colors</option>
              <option value={"Black"}>BLACK</option>
              <option value={"Blue"}>BLUE</option>
              <option value={"Red"}>RED</option>
              <option value={"White"}>WHITE</option>
              <option value={"Green"}>GREEN</option>
              <option value={"Yellow"}>YELLOW</option>
              <option value={"Pink"}>PINK</option>
            </select>
          </div>
        </div>


       

        <div className={styles.cardContainer}>
          <p>RESULTS</p>
          {filteredData.map((eachItem) => {
            return (
              <>
                <div className={styles.card}>
                  <Link to={`/viewproduct/${eachItem.id}`}><img onClick={()=>(getData.viewProductHandler(updatedData))} className={styles.cardImage} src={eachItem.img} alt={eachItem.category} /></Link>
                  <div className={styles.cardBody}>
                    <p className={styles.name}>{eachItem.name}</p>
                    <Link to={`/viewproduct/${eachItem.id}`}><h5 onClick={()=>(getData.viewProductHandler(updatedData))} className={styles.cardTitle}>{eachItem.title}</h5></Link>
                    <h5 className={styles.cardPrice}>{eachItem.prevPrice}</h5>
                  </div>
                </div>
              </>
            );
          })}

        </div>
      </div>

      <Footer/>
    </>
  );
}

export default WomenScreen