const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51O56oxSJgE3QvMTTSZ6Rw9mgOFenz6bP5FrLW9vkyZrkfMsA2CX6EK1VPdocnib4T3Ez6DbQQfNx34nwQJJdvoTI00fS09rqA8")

app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session", async(req,res)=>{
  const {products} = req.body;

  const lineItems = products.map((product)=>({
    price_data:{
      currency:"usd",
      product_data:{
        name:product.title
      },
      unit_amount: parseFloat(product.prevPrice.replace(/[^0-9.]/g, '')) * 100,
    },
    quantity:product.count
  }));
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items: lineItems,
    mode:"payment",
    success_url:"http://localhost:3000/success",
    cancel_url:"http://localhost:3000/cancel",
  })

  res.json({id:session.id})
})


app.listen(7000, ()=>{
  console.log("server start")
})