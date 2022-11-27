const product_card = [
    {
        id: "price_1M8by4SJBGVuaAxLChTDTIAH",
        product_name: "Opium Pastry",
        description: "made by layering a dark chocolate sponge with chocolate mousse",
        price: 3,
        currency: "$",
        thumb: "./images/ps5.webp",
        priceId: "price_1M8by4SJBGVuaAxLChTDTIAH",
    },
    {
        id: "price_1M8byvSJBGVuaAxLSBCzemFK",
        product_name: "Red velvet pastry",
        description: "a cocoa and buttermilk sponge with our signature cream cheese",
        price: 2,
        currency: "$",
        thumb: "./images/ps4.webp",
        priceId: "price_1M8byvSJBGVuaAxLSBCzemFK"
    },
    {
        id: "price_1M8bzUSJBGVuaAxLELhO0j9z",
        product_name: "Devils Mousse Pastry",
        description: "chocolate mousse baked on a sponge base",
        price: 3,
        currency: "$",
        thumb: "./images/ps3.webp",
        priceId: "price_1M8bzUSJBGVuaAxLELhO0j9z"
    },
    {
        id: "price_1M8bzySJBGVuaAxLgqbUr3R9",
        product_name: "Cream Pineapple Pastry",
        description: "made by layering a vanilla sponge with fresh dairy cream",
        price: 3,
        currency: "$",
        thumb: "./images/ps7.webp",
        priceId: "price_1M8bzySJBGVuaAxLgqbUr3R9"
    },
    
]
function getProductData(id) {
    let productData = product_card.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}
export  { product_card, getProductData};