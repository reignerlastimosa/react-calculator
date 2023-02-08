import { useState } from "react";
import Navbar from "../components/Navbar";

const Calculator = () =>{ 

    const [display,setDisplay] = useState("")



    const buttonClick = (e) =>{
        
        setDisplay(display.concat(e.target.name));
        
    }

    const clear = () =>{
        setDisplay("");
    }

    const backSpace = () =>{
        setDisplay(display.slice(0,-1));
    }

    const calculate = () =>{
        try{
            setDisplay(eval(display));
        }catch(err){
            setDisplay("Error Occurred");
        }
    }

    const displayChange = (e) =>{
        setDisplay(e.target.value);
    }

    return (

<div className="container">
    
    <Navbar/>
    <h1>Calculator</h1>

    <div className = "calculator">
        <input type="text" value={display} onChange={displayChange} placeholder="Input number" maxlength="18"/>
        <div className ="buttons">
            <button className="clear" name="C" onClick={clear}>C</button>
            <button className ="backspace" onClick={backSpace}>&larr;</button>
            <button className ="oper" name="/" onClick={buttonClick}>/</button>
            <button name="7" onClick={buttonClick}>7</button>
            <button name="8" onClick={buttonClick}>8</button>
            <button name="9" onClick={buttonClick}>9</button>
            <button className ="oper" name="*" onClick={buttonClick}>x</button>
            <button name="4" onClick={buttonClick}>4</button>
            <button name="5" onClick={buttonClick}>5</button>
            <button name="6" onClick={buttonClick}>6</button>
            <button className ="oper" name="-" onClick={buttonClick}>-</button>
            
            <button name="1" onClick={buttonClick}>1</button>
            <button name="2" onClick={buttonClick}>2</button>
            <button name="3" onClick={buttonClick}>3</button>
            <button className ="oper" name="+" onClick={buttonClick}>+</button>
            <button name="0" onClick={buttonClick}>0</button>
            <button name="." onClick={buttonClick}>.</button>
            <button className ="equal" name="=" onClick={calculate}>=</button>
        </div>
    </div>

<h5>Made by Reigner Lastimosa</h5>
</div>
    )

}

export default Calculator;