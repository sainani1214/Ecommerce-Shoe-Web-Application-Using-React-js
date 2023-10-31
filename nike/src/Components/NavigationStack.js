import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewFeatured from './New & Featured Screen'
import MenScreen from './MenScreen'
import WomenScreen from './WomenScreen'
import SaleScreen from './SaleScreen'
import Snkrs from './Snkrs'
import KidsScreen from './KidsScreen'
import CustomiseScreen from './CustomiseScreen'
import FindAStoreScreen from './findAStoreScreen'
import HelpScreen from './HelpScreen'
import JoinScreen from './JoinScreen'
import SignInScreen from './SignInScreen'
import ViewProductDetail from './ViewProductDetail'
import CartScreen from './CartScreen'
import { useContext } from 'react'
import { ProductContext } from '../App'
import Success from './Success'
import Cancel from './Cancel'




function NavigationStack() {
  const {signIn} = useContext(ProductContext);
 

 
  return (

   <BrowserRouter>
    

            
      {signIn
      ?
      <Routes>
        <Route path='/men' element={<MenScreen/>}/>
        <Route path='/viewproduct/:productId' element={<ViewProductDetail/>}/>
        <Route path='/find a store' element={<FindAStoreScreen/>}/>
        <Route path='/help' element={<HelpScreen/>}/>
        <Route path='/join' element={<JoinScreen/>}/>
        <Route path='/' element={<NewFeatured/>}/>
        <Route path='/women' element={<WomenScreen/>}/>
        <Route path='/kids' element={<KidsScreen/>}/>
        <Route path='/sale' element={<SaleScreen/>}/>
        <Route path='/customise' element={<CustomiseScreen/>}/>
        <Route path='/snkrs' element={<Snkrs/>}/>
        <Route path='/cart' element={<CartScreen/>}/>  
      </Routes>
      :
      <Routes>
        <Route path='/' element={<SignInScreen/>}/>
        <Route path='/success' element={<Success/>}/> 
        <Route path='/cancel' element={<Cancel/>}/> 
      </Routes>
}
   </BrowserRouter>

  )
}

export default NavigationStack