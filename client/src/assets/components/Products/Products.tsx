import { ProductContext } from "../../context/ProductContext"

import { useContext, useEffect, useState } from "react";
import "./Products.css"
// import IProduct from "../../interfaces/IProduct";

const Products = () => {
  const { singleProduct, intervalValue } = useContext(ProductContext);
//   const { loggedInUser } = useContext(UserContext);
const [isRunning, setIsRunning] = useState(false)
// const [siffra, setSiffra] = useState(0)

let siffra = 10
function timertest() {
    

    if (isRunning) {
        clearInterval(addTimer) //State för intervalID?
        
        
    } else {

        console.log("Startar timer")
        const addTimer = setInterval(() => {
            setIsRunning(true)
            siffra--
            console.log(siffra)
            if (siffra <= 0) {
                clearInterval(addTimer)
                console.log("Timer klar")
                setIsRunning(false)
            }
            // setIntervalValue(value)
            
        }, 1000);
    }
        
}
  

useEffect(() => {
console.log("Uppdaterat singleProduct:", singleProduct);

}, [singleProduct]);

  return (
    <div className="Products">
        <button onClick={() => timertest()}>Starta (om) timer</button>



        <div className="ProductList"> 
            <table>
                <thead>
                    <tr>
                        
                        <th>Bild</th>
                        <th>Varumärke</th>
                        <th>Beskrivning</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {singleProduct ? (
                        <tr key={singleProduct.id}>
                        
                        
                            <td><img src={"https://productsearch.gs1.se/foodservice/asset/"+singleProduct.thumbnail} alt={singleProduct.descriptionShort} /></td>
                            <td>{singleProduct.brandName}</td>
                            <td>{singleProduct.descriptionShort}</td>
                        </tr>
                    ) : (
                        <tr><td colSpan={5}>Ingen produkt hittades</td></tr>
                    )}


                </tbody>
            </table>

        </div>
        {intervalValue > 0 && intervalValue < 11 ? <progress max="10" value={intervalValue} className="timeTracker"/> : ""}
        {/* <progress max="10" value={intervalValue} className="timeTracker"/> */}
    </div>
    
  );
};
export default Products;
