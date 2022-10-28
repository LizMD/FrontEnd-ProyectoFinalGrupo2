const express = require("express");
const bodyParser = require("body-parser");
const repository = require("./repository");
const mercadopago = require("mercadopago");
const app = express();
const port = process.env.PORT || 3000;

mercadopago.configure({
  access_token:
    "TEST-8257041865871296-101617-715fd48707294f80672bc4f96ebf2c8a-155935251",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/products", async (req, res) => {
  res.send(await repository.read());
});

app.post("/api/pay", async (req, res) => {
  const ids = req.body;
  const productsCopy = await repository.read();

  let preference = {
    items: [],
    back_urls: {
      success: "https://3000-lizmd-frontendproyecto-1iyjqdug5n1.ws-us72.gitpod.io/calendario",
      failure: "https://3000-lizmd-frontendproyecto-1iyjqdug5n1.ws-us72.gitpod.io/calendario",
      pending: "https://3000-lizmd-frontendproyecto-1iyjqdug5n1.ws-us72.gitpod.io/calendario",
    },
    auto_return: "approved",
  };

  let error = false;
  ids.forEach((id) => {
    const product = productsCopy.find((p) => p.id === id);
    if (product.stock > 0) {
      product.stock--;
      preference.items.push({
        title: product.name,
        unit_price: product.price,
        quantity: 1,
      });
    } else {
      error = true;
    }
  });

  if (error) {
    res.send("Sin stock").statusCode(400);
  } else {
    const response = await mercadopago.preferences.create(preference);
    const preferenceId = response.body.id;
    await repository.write(productsCopy);
    res.send({ preferenceId });
  }
});

app.get('/feedback', function(request, response) {
  response.json({
   Payment: request.query.payment_id,
   Status: request.query.status,
   MerchantOrder: request.query.merchant_order_id
 })
});

app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});