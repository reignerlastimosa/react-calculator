import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
const Byte = () =>{
    const [firstVal, setFirstVal] = useState("");
    const [secondVal, setSecondVal] = useState("");

    const[firstSelect,setFirstSelect] = useState("mb");
    const[secondSelect,setSecondSelect] = useState("gb");

    const buttonClick = (e) =>{
        setFirstVal(firstVal.concat(e.target.name));
    }
    
    useEffect(()=>{
        switch(firstSelect){
            case 'b':
                if(secondSelect === "b"){
                    setSecondVal(firstVal)
                }
                else if(secondSelect ==="kb"){
                    setSecondVal(firstVal * 0.0009765625)
                }
                else if(secondSelect ==="mb"){
                    setSecondVal(firstVal * 0.000001);
                }
                else if(secondSelect ==="gb"){
                    setSecondVal(firstVal * 0.000000001);
                }
                else if(secondSelect ==="tb"){
                    setSecondVal(firstVal * 0.000000000001);
                }
                else{
                    setSecondVal(firstVal * 0.000000000000001);
                }
                break;

            case 'mb':
                if(secondSelect === "b"){
                    setSecondVal(firstVal * 1000000 )
                }
                else if(secondSelect ==="kb"){
                    setSecondVal(firstVal * 1000)
                }
                else if(secondSelect ==="mb"){
                    setSecondVal(firstVal);
                }
                else if(secondSelect ==="gb"){
                    setSecondVal(firstVal * 0.001);
                }
                else if(secondSelect ==="tb"){
                    setSecondVal(firstVal * 0.000001);
                }
                else{
                    setSecondVal(firstVal * 0.000000001);
                }
                break;

            case 'kb':
                if(secondSelect === "b"){
                    setSecondVal(firstVal * 1000 )
                }
                else if(secondSelect ==="kb"){
                    setSecondVal(firstVal)
                }
                else if(secondSelect ==="mb"){
                    setSecondVal(firstVal * 0.001);
                }
                else if(secondSelect ==="gb"){
                    setSecondVal(firstVal * 0.000001);
                }
                else if(secondSelect ==="tb"){
                    setSecondVal(firstVal * 0.000000001);
                }
                else{
                    setSecondVal(firstVal * 0.000000000001);
                }
                break;

                case 'gb':
                    if(secondSelect === "b"){
                        setSecondVal(firstVal * 1000000000 )
                    }
                    else if(secondSelect ==="kb"){
                        setSecondVal(firstVal * 1000000)
                    }
                    else if(secondSelect ==="mb"){
                        setSecondVal(firstVal * 1000);
                    }
                    else if(secondSelect ==="gb"){
                        setSecondVal(firstVal);
                    }
                    else if(secondSelect ==="tb"){
                        setSecondVal(firstVal * 0.001);
                    }
                    else{
                        setSecondVal(firstVal * 0.000001);
                    }
                    break;

                    case 'tb':
                        if(secondSelect === "b"){
                            setSecondVal(firstVal * 1000000000000 )
                        }
                        else if(secondSelect ==="kb"){
                            setSecondVal(firstVal * 1000000000)
                        }
                        else if(secondSelect ==="mb"){
                            setSecondVal(firstVal * 1000000);
                        }
                        else if(secondSelect ==="gb"){
                            setSecondVal(firstVal * 1000);
                        }
                        else if(secondSelect ==="tb"){
                            setSecondVal(firstVal);
                        }
                        else{
                            setSecondVal(firstVal * 0.001);
                        }
                        break;

                    case 'pb':
                        if(secondSelect === "b"){
                            setSecondVal(firstVal * 1000000000000000 )
                        }
                        else if(secondSelect ==="kb"){
                            setSecondVal(firstVal * 1000000000000)
                        }
                        else if(secondSelect ==="mb"){
                            setSecondVal(firstVal * 1000000000);
                        }
                        else if(secondSelect ==="gb"){
                            setSecondVal(firstVal * 1000000);
                        }
                        else if(secondSelect ==="tb"){
                            setSecondVal(firstVal * 1000);
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
        setFirstSelect("mb");
        setSecondSelect("gb");
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
            <h1>Byte</h1>
            <div className="byte">  

            <div> 
            <select name="firstSelect" onChange={changeFirstSelect}>
                <option value="b">Byte</option>
                <option value="kb">Kilobyte</option>
                <option selected value="mb">Megabyte</option>
                <option value="gb">Gigabyte</option>
                <option value="tb">Terabyte</option>
                <option value="pb">Petabyte</option>
            </select>
            <input type="text" value={firstVal} onChange={changeVal} placeholder ={`Input ` + firstSelect}/>
            </div>

            <div> 
            <select name="secondSelect" onChange={changeSecondSelect}>
                <option value="b">Byte</option>
                <option value="kb">Kilobyte</option>
                <option value="mb">Megabyte</option>
                <option selected value="gb">Gigabyte</option>
                <option value="tb">Terabyte</option>
                <option value="pb">Petabyte</option>
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

export default Byte;