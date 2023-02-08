import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
const Temperature = () =>{
    
    const [firstVal, setFirstVal] = useState("");
    const [secondVal, setSecondVal] = useState("");

    const[firstSelect,setFirstSelect] = useState("celsius");
    const[secondSelect,setSecondSelect] = useState("fahrenheit");

    const buttonClick = (e) =>{
        setFirstVal(firstVal.concat(e.target.name));
    }
    
    useEffect(()=>{
        switch(firstSelect){
            case 'celsius':
                if(secondSelect === "celsius"){
                    setSecondVal(firstVal);
                }
                else if(secondSelect ==="fahrenheit"){
                    setSecondVal(firstVal * 33.8);
                }
                else{
                    setSecondVal(firstVal * 274.15);
                }
                break;

            case 'fahrenheit':
                if(secondSelect === "celsius"){
                    setSecondVal(firstVal * -17.22);
                }
                else if(secondSelect ==="fahrenheit"){
                    setSecondVal(firstVal);
                }
                else{
                    setSecondVal(firstVal * 255.927778);
                }
                break;

            case 'kelvin':
                if(secondSelect === "celsius"){
                    setSecondVal(firstVal * -272.15);
                }
                else if(secondSelect ==="fahrenheit"){
                    setSecondVal(firstVal * -457.87);
                }
                else{
                    setSecondVal(firstVal);
                }
                break;

              
        }
        
    })
    const backSpace = () =>{
        setFirstVal(firstVal.slice(0,-1));
    }

    const clear = () =>{
        setFirstVal("");
        setSecondVal("");
        setFirstSelect("celsius");
        setSecondSelect("fahrenheit");
    }

    const changeFirstSelect = (e) =>{
        setFirstSelect(e.target.value);
        
    }

    const changeSecondSelect = (e) =>{
        setSecondSelect(e.target.value);
    }

    const changeVal = (e) =>{
        setFirstVal(e.target.value);
    }

    return(
        <div className="container-2">
            <Navbar/>
            <h1>Temperature</h1>
            <div className="temp"> 
            <div>  
            <select name="firstSelect" onChange={changeFirstSelect}>
                <option selected value="celsius">Celsius</option>
                <option  value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
                
            </select>
            <input type="text" value={firstVal} onChange={changeVal} placeholder ={`Input ` + firstSelect}/>
            </div>

            <div> 
            <select name="secondSelect" onChange={changeSecondSelect}>
            <option value="celsius">Celsius</option>
                <option selected value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
            <input type="text" value={secondVal} disabled  />
            </div>
            

            <div className = "container">
        
        <div className ="buttons">
        <button className="clear" name="C" onClick={clear}>C</button>
            <button className ="backspace" onClick={backSpace}>&larr;</button>
            
            <button name="9" onClick={buttonClick}>9</button>
            <button name="0" onClick={buttonClick}>0</button>
            <button name="5" onClick={buttonClick}>5</button>
            
            <button name="6" onClick={buttonClick}>6</button>
            <button name="7" onClick={buttonClick}>7</button>
            <button name="8" onClick={buttonClick}>8</button>
            
            <button name="1" onClick={buttonClick}>1</button>
            <button name="2" onClick={buttonClick}>2</button>
            <button name="3" onClick={buttonClick}>3</button>
            <button name="4" onClick={buttonClick}>4</button>
            
        </div>
    </div>
    </div>
    <h5>Made by Reigner Lastimosa</h5>
        </div>
    )
}

export default Temperature;