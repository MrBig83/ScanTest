const express = require("express");

const app = express();
const { productRouter } = require("./resources/product/product.router");

// const port = 1337;

// app.use("/", function(request, response){ //root dir
//     response.send("Hello!!");
// });

app.use("/api", productRouter);


// app.listen(port, () => {
//     console.log("Server is running on port " + port);
// });

module.exports = { app };