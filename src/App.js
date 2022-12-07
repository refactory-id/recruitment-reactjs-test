/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantDate, setRestaurantDate] = useState("");
  const [restaurantCashierName, setRestaurantCashierrestaurantCashierName] = useState("");
  const [restaurantItem, setRestaurantItem] = useState("");
  const [restaurantPrice, setRestaurantPrice] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <div 
      className='app'
      onClick={e=>{inputRef.current.focus()}}
    >
      <div className='container'>
        <label>
          $&nbsp; 
        </label>
        <input 
          ref={inputRef}
          type="text" 
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>{
            if (e.key === 'Enter'){
              let newOutput = "";
              newOutput = `${output} \n $ ${input}`;
              switch(input){
                case "start":
                  newOutput = "Restaurant Name: ";
                  <Input 
                    max={30}
                    stages={'restaurantName'}
                    inputRef={inputRef}
                  />
                  // eslint-disable-next-line no-lone-blocks
                  { 
                    if(restaurantName.length > 0){
                      newOutput = "Restaurant Date: ";
                      <Input 
                        max={30}
                        stages={'restaurantDate'}
                        inputRef={inputRef}
                      />
                      if(restaurantDate.length > 0){
                        newOutput = "Cashier Name: ";
                        <Input 
                          max={30}
                          stages={'restaurantCashierName'}
                          inputRef={inputRef}
                        />
                        if(restaurantCashierName.length > 0){
                          newOutput = "Restaurant Item: ";
                          <Input 
                            max={30}
                            stages={'restaurantItem'}
                            inputRef={inputRef}
                          />
                          if(restaurantPrice.length > 0){
                            newOutput = "Restaurant Price: ";
                            <Input 
                              max={30}
                              stages={'restaurantPrice'}
                              inputRef={inputRef}
                            />
                          }
                        }
                      }
                    }
                  }
                  break;
                default:
                  
                  newOutput += "";
                  break;
              }
              setOutput(newOutput);
            }
          }}
        />
      </div>
      <div className="terminal">
        {output}
      </div>
    </div>
  );
}

export default App;
