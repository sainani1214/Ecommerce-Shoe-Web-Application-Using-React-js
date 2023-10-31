import React from 'react'
import Header1 from './Header1'
import Header2 from './Header2'
import image from '../Assets/HeaderAssets/MainPageAssets/image (1).jpg'

function JoinScreen() {
  return (
    <>
    <Header1/>
    <Header2/>
    <h2>Join Us</h2>
    <img style={{width:"100%",height:"auto"}} src={image} alt={'imag'}/>
    </>
  )
}

export default JoinScreen