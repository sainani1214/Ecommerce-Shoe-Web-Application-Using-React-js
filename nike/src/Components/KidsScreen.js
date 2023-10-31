import React, { useContext, useState } from 'react'
import Header1 from './Header1'
import Header2 from './Header2'
import Header3 from './Header3'
import { ProductContext } from '../App'
import styles from '../Styling/MenScreen.module.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const data = [
  {
    id : 41,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/385885/1.jpg",
    name: "Crocs",
    title: "CARS X CLASSIC CLOG KIDS",
    reviews: "(123 reviews)",
    prevPrice: "$76+",
    color: "Brown",
    category: "sneakers",
  },
  {
    id : 42,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/378654/1.jpg",
    name: "Crocs",
    title: "CARS X CLASSIC CLOG KIDS 'MATER'",
    reviews: "(123 reviews)",
    prevPrice: "$57+",
    color: "Red",
    category: "sneakers",
  },
  {
    id : 43,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/296153/1.jpg",
    name: "Adidas",
    title: "YEEZY SLIDES KIDS 'ONYX'",
    reviews: "(123 reviews)",
    prevPrice: "$125+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 44,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/385757/1.jpg",
    name: "Adidas",
    title: "MARVEL X ULTRA BOOST 1.0 KIDS",
    reviews: "(123 reviews)",
    prevPrice: "$154+",
    color: "Red",
    category: "sneakers",
  },
  {
    id : 45,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/180954/1.jpg",
    name: "Adidas",
    title: "YEEZY 700 V3 KIDS ALVAH",
    reviews: "(123 reviews)",
    prevPrice: "$266+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 46,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/381794/1.jpg",
    name: "Crocs",
    title: "DREAM WORKS X CLASSIC CLOG",
    reviews: "(123 reviews)",
    prevPrice: "$62+",
    color: "Green",
    category: "sneakers",
  },
  {
    id : 47,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/323648/1.jpg",
    name: "Adidas",
    title: "YEEZY SLIDES KIDS BONE 2022",
    reviews: "(123 reviews)",
    prevPrice: "$108+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 48,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/250575/1.jpg",
    name: "Adidas",
    title: "YEEZY BOOST 350 V2 KIDS",
    reviews: "(123 reviews)",
    prevPrice: "$344+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 49,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/319145/1.jpg",
    name: "Crocs",
    title: "COCOA PUFFS X CLASSIC CLOG",
    reviews: "(123 reviews)",
    prevPrice: "$50+",
    color: "Brown",
    category: "sneakers",
  },
  {
    id : 50,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/333382/1.jpg",
    name: "Adidas",
    title: "YEEZY BOOST 350 V2 KIDS",
    reviews: "(123 reviews)",
    prevPrice: "$306+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 51,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/325470/1.jpg",
    name: "Adidas",
    title: "YEEZY BOOST 450 KIDS",
    reviews: "(123 reviews)",
    prevPrice: "$237+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 52,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/376947/1.jpg",
    name: "Crocs",
    title: "SALEHE BEMBURRY X",
    reviews: "(123 reviews)",
    prevPrice: "$48+",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 53,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/271209/1.jpg",
    name: "Adidas",
    title: "YEEZY BOOST 700 MNVN KIDS",
    reviews: "(123 reviews)",
    prevPrice: "$190+",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 54,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/325466/1.jpg",
    name: "Adidas",
    title: "YEEZY BOOST 350 V2 KIDS",
    reviews: "(123 reviews)",
    prevPrice: "$259+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 55,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/155395/1.jpg",
    name: "Adidas",
    title: "YEEZY DESERT BOOT 'KIDS OIL'",
    reviews: "(123 reviews)",
    prevPrice: "$188+",
    color: "Black",
    category: "sneakers",
  },
]

const updatedData =  data.map((wholeData)=>{
  return(
    {...wholeData,count : 1}
  )
})


function KidsScreen() {
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
              <option value={"Crocs"}>CROCS</option>
              <option value={"Adidas"}>ADIDAS</option>
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
              <option value={"Brown"}>BROWN</option>
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

export default KidsScreen