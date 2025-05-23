import { createContext, useState, PropsWithChildren, Dispatch, SetStateAction, useEffect } from "react";
// import { createContext, useEffect, useState, PropsWithChildren, Dispatch, SetStateAction } from "react";


import IProduct from "../interfaces/IProduct";
// import IProductResponse from "../interfaces/IProductResponse";
// import { UIContext } from "./UIContext";

interface ProductContextProps {

    getSingleProduct: (id: string) => Promise<void>;
    singleProduct: IProduct | null;
    findProduct: string; 
    setFindProduct: Dispatch<SetStateAction<string>>;
    modeAdd: boolean;
    setModeAdd: Dispatch<SetStateAction<boolean>>;
    handleTimer: (timerID: number) => void;
    timerID: number;
    setTimerID: Dispatch<SetStateAction<number>>;
    intervalValue: number;
    



}

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const ProductContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  //Initial states


  //States

  const [singleProduct, setSingleProduct] = useState<IProduct | null>(null)
  const [findProduct, setFindProduct] = useState("")
  const [modeAdd, setModeAdd] = useState(false)
  const [timerID, setTimerID] = useState(1)
  const [intervalValue, setIntervalValue] = useState(11)
  
  // const [timerValue, setTimerValue] = useState(0)
//   const [productImage, setProductImage] = useState("")

//   const { setErrorMsg } = useContext(UIContext)

  
  //Functions






  const getSingleProduct = async (artNummer: string) => {
    console.log("Söker..." + artNummer);
        
      const res = await fetch(`/api/products/${artNummer}`);
      const data: IProduct = await res.json();
      
      
      if(data) { //Här ska vi ändra...
        setSingleProduct(data)
          
      } else {
        setSingleProduct(null)
      }

  };

// let interval = 0;
// countdownInterval()
function countdownInterval() {
  setIntervalValue(10); // Reset the interval value to 10

  const countdown = setInterval(() => {
    setIntervalValue((prevValue) => {
      if (prevValue > 0) {
        console.log("Countdown: " + (prevValue - 1));
        return prevValue - 1;
      } else {
        clearInterval(countdown); // Clear the interval when it reaches 0
        console.log("Countdown finished");
        return 0;
      }
    });
  }, 1000);
}

  // Här måste jag komma ett sätt för att resetta intervallet, utan att behöva starta ytterligare en timer. 

  function handleTimer(timerID: number) {
    // Clear any existing timeout or interval
    if (timerID) {
      clearTimeout(timerID);
      console.log("Timer Reset " + timerID);
    }
  
    // Clear any existing countdown interval
    setIntervalValue(10); // Reset the interval value to 10
    countdownInterval(); // Start the countdown
  
    // Start a new timeout
    const newTimerID = setTimeout(() => {
      console.log("Nu har det gått 10 sekunder " + newTimerID);
      setTimerID(0); // Reset the timer ID
      setModeAdd(false); // Disable modeAdd
    }, 10000);
  
    setTimerID(newTimerID); // Save the new timer ID
  }

  
  
  useEffect(() => {
    if (modeAdd == true) {
      handleTimer(timerID)
      // setTimeout(() => {
      //   console.log("Nu har det gått 10 sekunder");
      //   setModeAdd(false)
      // }, 10000);

    }
  }, [modeAdd])



  
return (
    <ProductContext.Provider
      value={{

        getSingleProduct,
        singleProduct,
        findProduct, 
        setFindProduct, 
        modeAdd, 
        setModeAdd, 
        timerID, 
        setTimerID,
        handleTimer, 
        intervalValue
        
        // timerValue,
       
        // setTimerValue

        
        
        // setTimerValue, 
        // timerFunktion
        // productImage
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
