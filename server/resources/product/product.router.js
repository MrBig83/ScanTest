const { Router } = require("express")

const {
    // getProducts, 
    getSingleProduct
    // addProduct, 
    // updateProduct, 
    // addDynamicField,
    // deleteProduct
} = require("./product.controller")

// const { adminOnly, auth, exists, validate } = require('../middlewares');
// const { ProductCreateValidationSchema } = require('./product.model')

const productRouter = Router()
// .get("/products", getProducts)
.get("/products/:id", getSingleProduct)
// .get("/products/image/:id", getProductImage)
// .post("/products", adminOnly, validate(ProductCreateValidationSchema), addProduct)

// .put("/products/:id", adminOnly, validate(ProductCreateValidationSchema), updateProduct) 
// .patch("/products/add-field", addDynamicField)

// .delete("/products/:id", adminOnly, deleteProduct)


module.exports = { productRouter }