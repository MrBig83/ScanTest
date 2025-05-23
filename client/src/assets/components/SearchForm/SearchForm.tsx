import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import "./SearchForm.css"


function SearchForm() {
    const { setFindProduct, findProduct, getSingleProduct, modeAdd, setModeAdd, handleTimer, timerID  } = useContext(ProductContext);

      const handleSearch = async () => {  
            console.log("Klickat " + findProduct);
            console.log(typeof findProduct);

            if(modeAdd == false) {

                
                if(findProduct === "bcAddProduct") {
                    console.log("Lägga till är aktiverat");
                    setModeAdd(true)
                    // setTimerValue(10000)
                    setFindProduct("")
                    
                } else {
                    
                    
                    await getSingleProduct(findProduct)
                    setFindProduct("")
                }
            } else {
                console.log("Lägg till produkt " + findProduct)
                handleTimer(timerID)
              
                //Funktion för att lägga till produkt till en array, 
                //som efter 10 sekunder lägger till i databasen
                

                
                // setTimerValue(10000)
                setFindProduct("")
                

                
            }
        }

  return (
    <div className="SearchForm">
        <div className='SearchFormContent'>
        

            <input 
                type="text" 
                placeholder="Sök produkt..."
                onChange={(e) => setFindProduct(e.target.value)}
                value={findProduct}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleSearch();
                }} />
            <button className="btn" onClick={() => handleSearch()}>Sök</button>
        </div>
    </div>
  )
}

export default SearchForm