import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
const Length = () =>{
    const [firstVal, setFirstVal] = useState("");
    const [secondVal, setSecondVal] = useState("");

    const[firstSelect,setFirstSelect] = useState("m");
    const[secondSelect,setSecondSelect] = useState("km");

    const buttonClick = (e) =>{
        setFirstVal(firstVal.concat(e.target.name));
    }
    
    useEffect(()=>{
        switch(firstSelect){
            case 'm':
                if(secondSelect === "cm"){
                    setSecondVal(firstVal * 100 )
                }
                else if(secondSelect ==="km"){
                    setSecondVal(firstVal / 1000)
                }
                else if(secondSelect ==="mm"){
                    setSecondVal(firstVal * 100000);
                }
                else if(secondSelect ==="dm"){
                    setSecondVal(firstVal * 10);
                }
                else{
                    setSecondVal(firstVal);
                }
                break;

            case 'cm':
                if(secondSelect === "cm"){
                    setSecondVal(firstVal);
                }
                else if(secondSelect ==="km"){
                    setSecondVal(firstVal / 100000)
                }
                else if(secondSelect ==="mm"){
                    setSecondVal(firstVal * 1000);
                }
                else if(secondSelect ==="dm"){
                    setSecondVal(firstVal / 10);
                }
                else{
                    setSecondVal(firstVal / 100)
                }
                break;

            case 'km':
                if(secondSelect === "cm"){
                    setSecondVal(firstVal * 100000);
                }
                else if(secondSelect ==="km"){
                    setSecondVal(firstVal);
                }
                else if(secondSelect ==="mm"){
                    setSecondVal(firstVal * 100000000);
                }
                else if(secondSelect ==="dm"){
                    setSecondVal(firstVal / 10000);
                }
                else{
                    setSecondVal(firstVal * 1000);
                }
                break;

                case 'mm':
                    if(secondSelect === "cm"){
                        setSecondVal(firstVal * 10);
                    }
                    else if(secondSelect ==="km"){
                        setSecondVal(firstVal / 100000000);
                    }

                    else if(secondSelect ==="mm"){
                        setSecondVal(firstVal);
                    }
                    else if(secondSelect ==="dm"){
                        setSecondVal(firstVal * 100);
                    }

                    else{
                        setSecondVal(firstVal * 100000);
                    }
                    break;

                    case 'dm':
                    if(secondSelect === "cm"){
                        setSecondVal(firstVal * 10);
                    }
                    else if(secondSelect ==="km"){
                        setSecondVal(firstVal / 10000);
                    }

                    else if(secondSelect ==="mm"){
                        setSecondVal(firstVal * 100);
                    }

                    else if(secondSelect ==="dm"){
                        setSecondVal(firstVal);
                    }

                    else{
                        setSecondVal(firstVal / 10);
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
        setFirstSelect("m");
        setSecondSelect("km");
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
            <h1>Measurement</h1>
            <div className="calculator-2"> 
            <div>  
            <select name="firstSelect" onChange={changeFirstSelect}>
                <option value="mm">Mililimeter</option>
                <option selected value="m">Meter</option>
                <option value="cm">Centimeter</option>
                <option value="km">Kilometer</option>
                <option value="dm">Decimeter</option>
            </select>
            <input type="text" value={firstVal} onChange={changeVal} placeholder={`Input `+ firstSelect}/>
            </div>

            <div>  
            <select name="secondSelect" onChange={changeSecondSelect}>
                <option value="mm">Mililimeter</option>
                <option value="cm">Centimeter</option>
                <option value="m">Meter</option>
                <option value="dm">Decimeter</option>
                <option selected value="km">Kilometer</option>
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

export default Length;