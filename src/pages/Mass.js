import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
const Mass = () =>{
    const [firstVal, setFirstVal] = useState("");
    const [secondVal, setSecondVal] = useState("");

    const[firstSelect,setFirstSelect] = useState("mg");
    const[secondSelect,setSecondSelect] = useState("kg");

    const buttonClick = (e) =>{
        setFirstVal(firstVal.concat(e.target.name));
    }
    
    useEffect(()=>{
        switch(firstSelect){
            case 'g':
                if(secondSelect === "g"){
                    setSecondVal(firstVal);
                }
                else if(secondSelect ==="mg"){
                    setSecondVal(firstVal * 1000);
                }
                else if(secondSelect ==="kg"){
                    setSecondVal(firstVal / 1000);
                }
                else if(secondSelect ==="lb"){
                    setSecondVal(firstVal / 453.59237);
                }
                else{
                    setSecondVal(firstVal / 28.3495231);
                }
                break;

            case 'mg':
                if(secondSelect === "g"){
                    setSecondVal(firstVal / 1000);
                }
                else if(secondSelect ==="mg"){
                    setSecondVal(firstVal);
                }
                else if(secondSelect ==="kg"){
                    setSecondVal(firstVal / 1000000);
                }
                else if(secondSelect ==="lb"){
                    setSecondVal(firstVal / 453592.37);
                }
                else{
                    setSecondVal(firstVal / 28349.5231);
                }
                break;

            case 'kg':
                if(secondSelect === "g"){
                    setSecondVal(firstVal * 1000);
                }
                else if(secondSelect ==="mg"){
                    setSecondVal(firstVal * 1000000);
                }
                else if(secondSelect ==="kg"){
                    setSecondVal(firstVal);
                }
                else if(secondSelect ==="lb"){
                    setSecondVal(firstVal * 2.20462262);
                }
                else{
                    setSecondVal(firstVal * 35.2739619);
                }
                break;

                case 'lb':
                    if(secondSelect === "g"){
                        setSecondVal(firstVal * 453.59237);
                    }
                    else if(secondSelect ==="mg"){
                        setSecondVal(firstVal * 453,592.37);
                    }
                    else if(secondSelect ==="kg"){
                        setSecondVal(firstVal * 0.45359237);
                    }
                    else if(secondSelect ==="lb"){
                        setSecondVal(firstVal);
                    }
                    else{
                        setSecondVal(firstVal * 16);
                    }
                    break;

                case 'oz':
                    if(secondSelect === "g"){
                        setSecondVal(firstVal * 28.3495231);
                    }
                    else if(secondSelect ==="mg"){
                        setSecondVal(firstVal * 28349.5231);
                    }
                    else if(secondSelect ==="kg"){
                        setSecondVal(firstVal * 0.0283495231);
                    }
                    else if(secondSelect ==="lb"){
                        setSecondVal(firstVal * 0.0625);
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
        setFirstSelect("mg");
        setSecondSelect("kg");
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
            <h1>Mass</h1>
            <div className="mass"> 
            <div>  
            <select name="firstSelect" onChange={changeFirstSelect}>
                <option  value="g">Gram</option>
                <option  selected value="mg">Miligram</option>
                <option value="kg">Kilogram</option>
                <option value="lb">Pound</option>
                <option value="oz">Ounce</option>
                

            </select>
            <input type="text" value={firstVal} onChange={changeVal} placeholder ={`Input ` + firstSelect}/>
            </div>

            <div> 
            <select name="secondSelect" onChange={changeSecondSelect}>
            <option  value="g">Gram</option>
                <option  value="mg">Miligram</option>
                <option selected value="kg">Kilogram</option>
                <option value="lb">Pound</option>
                <option value="oz">Ounce</option>
            </select>
            <input type="text" value={secondVal} disabled  />
            </div>
            

            
        
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
        <h5>Made by Reigner Lastimosa</h5>
        </div>
    )
}

export default Mass;