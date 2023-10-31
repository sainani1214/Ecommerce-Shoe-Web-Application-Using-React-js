import React from 'react'
import image from '../Assets/HeaderAssets/MainPageAssets/what-to-wear-to-an-ice-hockey-game-5-outfit-ideas.jpg'
import Header1 from './Header1'
import Header2 from './Header2'
import Header3 from './Header3'
import Footer from './Footer'

function Snkrs() {
  return (
    <>
    <Header1/>
    <Header2/>
    <Header3/>
    <img style={{width:"100%",height:"auto",marginBottom:"20px"}} src={image} alt={'NikeImage'}/>
    {/* <div>
      <h2>ABOUT</h2>
      <p>Nike, Inc.[note 1] (stylized as NIKE) is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States.[4] It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.[5][6]

The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971. The company takes its name from Nike, the Greek goddess of victory.[7] Nike markets its products under its own brand, as well as Nike Golf, Nike Pro, Nike+, Air Jordan, Nike Blazers, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding, Nike CR7,[8] and subsidiaries including Air Jordan and Converse (brand). Nike also owned Bauer Hockey from 1995 to 2008, and previously owned Cole Haan, Umbro, and Hurley International.[9] In addition to manufacturing sportswear and equipment, the company operates retail stores under the Niketown name. Nike sponsors many high-profile athletes and sports teams around the world, with the highly recognized trademarks of "Just Do It" and the Swoosh logo.

As of 2020, it employed 76,700 people worldwide.[10] In 2020, the brand alone was valued in excess of $32 billion, making it the most valuable brand among sports businesses.[11] Previously, in 2017, the Nike brand was valued at $29.6 billion.[12] Nike ranked 89th in the 2018 Fortune 500 list of the largest United States corporations by total revenue.</p>
    </div> */}

    <Footer/>
    </>
  )
}

export default Snkrs