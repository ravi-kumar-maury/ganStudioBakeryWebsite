//sk_test_51M8bsiSJBGVuaAxL6d1hRrU4l3CjqCCHjRYWTV5GbJcYYwf3QYmpnMRL8tVeTomkD8XeDpjCoCLpcst4SprKejTh00R3VaZPVB
// Cream Pineapple Pastry: price_1M8bzySJBGVuaAxLgqbUr3R9
// Devils Mousse Pastry: price_1M8bzUSJBGVuaAxLELhO0j9z
// Red velvet pastry: price_1M8byvSJBGVuaAxLSBCzemFK
//Opium Pastry: price_1M8by4SJBGVuaAxLChTDTIAH 
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51M8bsiSJBGVuaAxL6d1hRrU4l3CjqCCHjRYWTV5GbJcYYwf3QYmpnMRL8tVeTomkD8XeDpjCoCLpcst4SprKejTh00R3VaZPVB');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));