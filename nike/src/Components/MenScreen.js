import React, { useContext, useState } from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import styles from "../Styling/MenScreen.module.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../App";
import Footer from "./Footer";


const data = [
  {
    id : 1,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/345070/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 8 RETRO 'PLAYOFF' 2023",
    reviews: "(123 reviews)",
    prevPrice: "$184+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 2,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/367078/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 4 RETRO 'RED CEMENT'",
    reviews: "(123 reviews)",
    prevPrice: "$205+",
    newPrice: "100",
    company: "Puma",
    color: "Red",
    category: "sneakers",
  },
  {
    id : 3,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/355545/1.jpg",
    name: "Nike",
    title: "BORN X RAISED X DUNK LOW",
    reviews: "(123 reviews)",
    prevPrice: "$463+",
    newPrice: "100",
    company: "Puma",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 4,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/253215/1.jpg",
    name: "Nike",
    title: "DUNK LOW 'BLACK WHITE",
    reviews: "(123 reviews)",
    prevPrice: "$106+",
    newPrice: "100",
    company: "Puma",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 5,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/359020/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 12 RETRO 2023",
    reviews: "(123 reviews)",
    prevPrice: "$262+",
    newPrice: "100",
    company: "Puma",
    color: "Red",
    category: "sneakers",
  },
  {
    id : 6,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/367070/1.jpg",
    name: "Air Jordan",
    title: "WMNS AIR JORDAN 4 RETRO",
    reviews: "(123 reviews)",
    prevPrice: "$205+",
    newPrice: "100",
    company: "Puma",
    color: "Cream",
    category: "sneakers",
  },
  {
    id : 7,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/370415/1.jpg",
    name: "Air Jordan",
    title: "J.BALVIN X AIR JORDAN 3 RETRO",
    reviews: "(123 reviews)",
    prevPrice: "$392+",
    newPrice: "100",
    company: "Puma",
    color: "White",
    category: "sneakers",
  },
  {
    id : 8,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/362397/1.jpg",
    name: "Nike",
    title: "DUNK LOW 'POLAR BLUE'",
    reviews: "(123 reviews)",
    prevPrice: "$111+",
    newPrice: "100",
    company: "Puma",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 9,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/348432/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 3 RETRO 'WHITE'",
    reviews: "(123 reviews)",
    prevPrice: "$102+",
    newPrice: "100",
    company: "Puma",
    color: "White",
    category: "sneakers",
  },
  {
    id : 10,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/353523/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 4 RETRO 'THUNDER'",
    reviews: "(123 reviews)",
    prevPrice: "$250+",
    newPrice: "100",
    company: "Puma",
    color: "Yellow",
    category: "sneakers",
  },
  {
    id : 11,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/374013/1.jpg",
    name: "Nike",
    title: "NIKE DUNK LOW 'SMOKE GREY GUM",
    reviews: "(123 reviews)",
    prevPrice: "$160+",
    newPrice: "100",
    company: "Puma",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 12,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/351725/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 1 RETRO HIGH OG",
    reviews: "(123 reviews)",
    prevPrice: "$189+",
    newPrice: "100",
    company: "Puma",
    color: "Brown",
    category: "sneakers",
  },
  {
    id : 13,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/358111/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 1 RETRO 'UNC TOE'",
    reviews: "(123 reviews)",
    prevPrice: "$163+",
    newPrice: "100",
    company: "Puma",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 14,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/370544/1.jpg",
    name: "Nike",
    title: "WMNS DUNK LOW 'CACAO WOW'",
    reviews: "(123 reviews)",
    prevPrice: "$107+",
    newPrice: "100",
    company: "Puma",
    color: "Brown",
    category: "sneakers",
  },
  {
    id : 15,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/307016/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 1 RETRO 'CHICAGO'",
    reviews: "(123 reviews)",
    prevPrice: "$224+",
    newPrice: "100",
    company: "Puma",
    color: "Red",
    category: "sneakers",
  },
  {
    id : 16,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/299066/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 'MILITARY BLACK'",
    reviews: "(123 reviews)",
    prevPrice: "$324+",
    newPrice: "100",
    company: "Puma",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 17,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/307015/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 11 RETRO 'CHERRY'",
    reviews: "(123 reviews)",
    prevPrice: "$186+",
    newPrice: "100",
    company: "Puma",
    color: "Red",
    category: "sneakers",
  },
  {
    id : 18,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/275138/1.jpg",
    name: "New Balance",
    title: "2002 R 'PROTECTION PACK'",
    reviews: "(123 reviews)",
    prevPrice: "$186+",
    newPrice: "100",
    company: "Puma",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 19,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/149400/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 4 RETRO 'BLACK CAT'",
    reviews: "(123 reviews)",
    prevPrice: "$572+",
    newPrice: "100",
    company: "Puma",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 20,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/371551/1.jpg",
    name: "Air Jordan",
    title: "WMNS AIR JORDAN 1 RETRO HIGH'",
    reviews: "(123 reviews)",
    prevPrice: "$157+",
    newPrice: "100",
    company: "Puma",
    color: "Red",
    category: "sneakers",
  },
  {
    id : 21,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/296986/1.jpg",
    name: "Nike",
    title: "WMNS DUNK LOW 'WHISPER'",
    reviews: "(123 reviews)",
    prevPrice: "$90+",
    newPrice: "100",
    company: "Puma",
    color: "Cream",
    category: "sneakers",
  },
  {
    id :22,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/359393/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 4 RETRO SP",
    reviews: "(123 reviews)",
    prevPrice: "$286+",
    newPrice: "100",
    company: "Puma",
    color: "Green",
    category: "sneakers",
  },
  {
    id : 23,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/274477/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 4 RETRO 'RED'",
    reviews: "(123 reviews)",
    prevPrice: "$250+",
    newPrice: "100",
    company: "Puma",
    color: "Red",
    category: "sneakers",
  },
  {
    id : 24,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/343845/1.jpg",
    name: "Air Jordan",
    title: "AIR JORDAN 5 RETRO 'UNC' ",
    reviews: "(123 reviews)",
    prevPrice: "$150+",
    newPrice: "100",
    company: "Puma",
    color: "Blue",
    category: "sneakers",
  },
];

const updatedData =  data.map((wholeData)=>{
  return(
    {...wholeData,count : 1}
  )
})






function MenScreen() {
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

export default MenScreen;
