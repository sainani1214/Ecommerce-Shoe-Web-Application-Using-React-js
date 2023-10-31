import React, { useContext, useEffect, useState } from 'react'
import styles from '../Styling/SignInScreen.module.css'
import nikeLogo from '../Assets/HeaderAssets/NikeIcon.png'
import jordanLogo from '../Assets/HeaderAssets/JordanLogo.png'
import axios from 'axios';
import { ProductContext } from '../App';

function SignInScreen() {
  const {signInHandler} = useContext(ProductContext);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/users").then((response)=>setArray(response.data));
  },[]);


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [array,setArray] = useState([]);
  const [error,setError] = useState(false);

  console.log(array);

  const emailHandler=(event)=>{
    setEmail(event.target.value)
  }

  const passwordHandler=(event)=>{
    setPassword(event.target.value)
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    const user = array.find((userData)=>userData.email === email && userData.password === password);

    if(user){
      signInHandler();
    }else{
      setError(true);
    }
  }

  return (
    <>
    <div className={styles.mainContainer}>

      <div className={styles.firstDiv}>
        <img src={nikeLogo} alt='nikeLogo'/>
        <img style={{marginLeft:"12px"}} src={jordanLogo} alt='jordanLogo'/>
      </div>

      <div className={styles.secondDiv}>
        <span>Enter your email & password to sign in.</span>
      </div>

      <div>
        <form onSubmit={submitHandler}>
          <div className={styles.email}>
          <label >Email</label><br></br>
          <input type='text' onChange={emailHandler}/><br></br>
          </div>
          <div className={styles.password}>
          <label>Password</label><br></br>
          <input type='text' onChange={passwordHandler}/><br></br>
          </div>
          <div>
          <p className={styles.error}>{error ? "Your credentials are invalid" : ""}</p>
          </div>
          <div className={styles.terms}>
            <p>By continuing, I agree to Nike's Privacy Policy<br></br> and Terms of Use.</p>
          </div>
          <div style={{display:"flex", justifyContent:"right"}}>
          <button className={styles.continueButton} type='submit'>Continue</button>
          </div>
         
        </form>
      </div>

    </div>
    </>
  )
}

export default SignInScreen