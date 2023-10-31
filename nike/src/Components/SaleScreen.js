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
    id : 71,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/153926/1.jpg",
    name: "Nike",
    title: "AIR MAX 720 'BLACK JERSEY MESH'",
    reviews: "(123 reviews)",
    prevPrice: "$279+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 72,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/340092/1.jpg",
    name: "Nike",
    title: "ACG AIR MADA 'LIGHT MENTA'",
    reviews: "(123 reviews)",
    prevPrice: "$206+",
    color: "Green",
    category: "sneakers",
  },
  {
    id : 73,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/138564/1.jpg",
    name: "Nike",
    title: "PG 3 'MAMBA MENTA'",
    reviews: "(123 reviews)",
    prevPrice: "$52+",
    color: "Green",
    category: "sneakers",
  },
  {
    id : 74,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/218456/1.jpg",
    name: "Nike",
    title: "KOBE MENTALITY 2 'THUNDER'",
    reviews: "(123 reviews)",
    prevPrice: "$52+",
    color: "Yellow",
    category: "sneakers",
  },
  {
    id : 75,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/230478/1.jpg",
    name: "Nike",
    title: "OFF WHITE X AIR MAX 97",
    reviews: "(123 reviews)",
    prevPrice: "$228+",
    color: "Yellow",
    category: "sneakers",
  },
  {
    id : 76,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/208476/1.jpg",
    name: "Nike",
    title: "KYRIE 3 'EP MAMBA'",
    reviews: "(123 reviews)",
    prevPrice: "$501+",
    color: "Yellow",
    category: "sneakers",
  },
  {
    id : 77,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/285766/1.jpg",
    name: "Nike",
    title: "ALPHA MENACE ELITE 2 WIDE",
    reviews: "(123 reviews)",
    prevPrice: "$248+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 78,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/213106/1.jpg",
    name: "Nike",
    title: "KOBE MENTALITY 2",
    reviews: "(123 reviews)",
    prevPrice: "$297+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 79,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/296471/1.jpg",
    name: "Nike",
    title: "AIR FORCE 1 LV8 GS",
    reviews: "(123 reviews)",
    prevPrice: "$73+",
    color: "Red",
    category: "sneakers",
  },
  {
    id : 80,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/347556/1.jpg",
    name: "Adidas",
    title: "GAZELLE VINTAGE 'HALO BLUE'",
    reviews: "(123 reviews)",
    prevPrice: "$171+",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 81,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/378978/1.jpg",
    name: "Adidas",
    title: "X CRAZY FAST MESSI FG",
    reviews: "(123 reviews)",
    prevPrice: "$318+",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 82,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/323236/1.jpg",
    name: "Nike",
    title: "FORCE 58 SB WOLF GREY",
    reviews: "(123 reviews)",
    prevPrice: "$112+",
    color: "Grey",
    category: "sneakers",
  },
  {
    id : 83,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/345640/1.jpg",
    name: "Nike",
    title: "FORUM MID 'MESA GUM'",
    reviews: "(123 reviews)",
    prevPrice: "$136+",
    color: "Brown",
    category: "sneakers",
  },
  {
    id : 84,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/386239/1.jpg",
    name: "Nike",
    title: "ALPHA MENACE 3 SHARK 'WHITE'",
    reviews: "(123 reviews)",
    prevPrice: "$223+",
    color:"White",
    category: "sneakers",
  },
  {
    id : 85,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/347031/1.jpg",
    name: "Puma",
    title: "R78 MESH 'NIMBUS CLOUD LIMOGES'",
    reviews: "(123 reviews)",
    prevPrice: "$127+",
    color:"Orange",
    category: "sneakers",
  },
]

const updatedData =  data.map((wholeData)=>{
  return(
    {...wholeData,count : 1}
  )
})

function SaleScreen() {
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

export default SaleScreen