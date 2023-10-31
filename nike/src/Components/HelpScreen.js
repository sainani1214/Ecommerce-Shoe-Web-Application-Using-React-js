import React, { useState } from 'react'
import Header1 from './Header1'
import Header2 from './Header2'

function HelpScreen() {
  const [search,setSearch] = useState("");

  const queryHandler=(event)=>{
    setSearch(event.target.value)
  }

  return (
    <>
    <Header1/>
    <Header2/>
    <h2 style={{textAlign:"center"}}>GET HELP</h2>
    <div style={{display:"flex", justifyContent:"center"}} >
    <input style={{width:"350px", height:"50px", borderRadius:"10px", border:"1px solid black", borderStyle:"solid", fontSize:"18px", paddingLeft:"10px"}} placeholder='What can we help you with?' type='text' onChange={queryHandler}/>
    </div>
    </>
  )
}

export default HelpScreen