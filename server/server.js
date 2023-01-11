const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mercadopago = require("mercadopago");


app.use(bodyParser.urlencoded({ extended: true }))

mercadopago.configure({
    access_token: "APP_USR-1897941534874212-080619-c3d06fbf63745b58fe85233b30ade09f-1174046863"
});


app.post("/checkout", async (req, res) => {
    const products = JSON.parse(req.body.cartProducts)
    console.log(products)

    let items = []

    for (let i = 0; i < products.length; i++) {
      console.log('products en i: ', products[i].product)
      console.log('price en i: ', products[i].price)
      items.push(
        {
          title: products[i].product,
          currency_id: "ARS",
          picture_url: products[i].photoURL,
          description: products[i].flavor,
          unit_price: parseInt(products[i].price),
          quantity: 1
        }
      )
    }

    let preference = {
      items: items
    };

      
    
    mercadopago.preferences
  .create(preference)
  .then(function (response) {
    console.log(response.body)
    res.redirect(response.body.init_point)
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  );

app.listen(5000, () => {console.log('server started on port 5000')})

