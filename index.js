const express = require('express');
const app = express();
const cors = require("cors")
app.use(cors())
require('dotenv').config();
const port = process.env.PORT || 8000
// const products = require('./routes/product.js')
// const cart = require('./routes/cart.js')
const {readdirSync} = require("fs")

readdirSync("./routes").map((file)=>app.use("/",require("./routes/"+file)))

app.get('/', (req, res) => {
  res.send('Home Page')
})

// app.get("/products", products);
// app.get("/cart", cart);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
