// const { ProductModel } = require("./product.model")


async function getSingleProduct(req, res) {    
    console.log("API SÖK " + req.params.id);
    

    const data = await fetch("https://productsearch.gs1.se/foodservice/tradeItem/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "query": req.params.id,
            // "query": "7300400118408",
            "sortby": 0, 
            "sortDirection": 0
        })
    })
    const singleProduct = await data.json()
    console.log(singleProduct);

    let productWithImage = singleProduct.results.find(product => product.thumbnail);

    if (productWithImage) {
        res.status(200).json(productWithImage);
        console.log("Product with image found:", productWithImage);
        
    } else {
        res.status(200).json(singleProduct);
    }
    
    // res.status(200).json(req.params.id)
    // res.status(200).json(singleProduct)
}


module.exports = { getSingleProduct }