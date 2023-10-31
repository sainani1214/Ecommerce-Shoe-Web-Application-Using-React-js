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
    id : 56,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/292368/1.jpg",
    name: "Adidas",
    title: "CRAIG GREEN X SCUBA",
    reviews: "(123 reviews)",
    prevPrice: "$107+",
    color: "Green",
    category: "sneakers",
  },
  {
    id : 57,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/279591/1.jpg",
    name: "Adidas",
    title: "BBC ICE CREAM X",
    reviews: "(123 reviews)",
    prevPrice: "$76+",
    color: "Green",
    category: "sneakers",
  },
  {
    id : 58,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/364232/1.jpg",
    name: "Adidas",
    title: "CAMPUS 80S CROP",
    reviews: "(123 reviews)",
    prevPrice: "$37+",
    color: "Brown",
    category: "sneakers",
  },
  {
    id : 59,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/322406/1.jpg",
    name: "Adidas",
    title: "HEBRU BRANTLEY X FORUM",
    reviews: "(123 reviews)",
    prevPrice: "$92+",
    color: "Blue",
    category: "sneakers",
  },
  {
    id : 60,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/289927/1.jpg",
    name: "Adidas",
    title: "NOAH X VINTAGE RUNNER BROWN",
    reviews: "(123 reviews)",
    prevPrice: "$89+",
    color: "Brown",
    category: "sneakers",
  },
  {
    id : 61,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/323248/1.jpg",
    name: "Adidas",
    title: "PHARRELL WILLIAMS X TENNIS ",
    reviews: "(123 reviews)",
    prevPrice: "$92+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 62,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/140973/1.jpg",
    name: "Adidas",
    title: "DONALD GLOVER X NIZZA ",
    reviews: "(123 reviews)",
    prevPrice: "$92+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 63,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/290846/1.jpg",
    name: "Adidas",
    title: "PHARRELL X HUMAN RACE SICHONA",
    reviews: "(123 reviews)",
    prevPrice: "$195+",
    color: "Yellow",
    category: "sneakers",
  },
  {
    id : 64,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/374364/1.jpg",
    name: "Adidas",
    title: "COURT TNS PREMIERE 'GREEN GUM'",
    reviews: "(123 reviews)",
    prevPrice: "$117+",
    color: "Green",
    category: "sneakers",
  },
  {
    id : 65,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/148206/1.jpg",
    name: "Adidas",
    title: "BRISTOL STUDIO X CRAZY BYW 2",
    reviews: "(123 reviews)",
    prevPrice: "$92+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 66,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/289929/1.jpg",
    name: "Adidas",
    title: "NOAH X LAB RACE 'HALO IVORY'",
    reviews: "(123 reviews)",
    prevPrice: "$72+",
    color: "Yellow",
    category: "sneakers",
  },
  {
    id : 67,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/289926/1.jpg",
    name: "Adidas",
    title: "NOAH X LAB RACE 'BROWN'",
    reviews: "(123 reviews)",
    prevPrice: "$78+",
    color: "Brown",
    category: "sneakers",
  },
  {
    id : 68,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/356193/1.jpg",
    name: "Adidas",
    title: "PUIG INDOOR 'WHITE GREY'",
    reviews: "(123 reviews)",
    prevPrice: "$83+",
    color: "White",
    category: "sneakers",
  },
  {
    id : 69,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/292367/1.jpg",
    name: "Adidas",
    title:"CRAIG GREEN X SCUBA PHORMAR",
    reviews: "(123 reviews)",
    prevPrice: "$106+",
    color: "Black",
    category: "sneakers",
  },
  {
    id : 70,
    img: "https://cdn.flightclub.com/1800/TEMPLATE/292371/1.jpg",
    name: "Adidas",
    title:"CRAIG GREEN X SCUBA TACTILE",
    reviews: "(123 reviews)",
    prevPrice: "$128+",
    color: "Orange",
    category: "sneakers",
  },
]

const updatedData =  data.map((wholeData)=>{
  return(
    {...wholeData,count : 1}
  )
})

function CustomiseScreen() {
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

export default CustomiseScreen