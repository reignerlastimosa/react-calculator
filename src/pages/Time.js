import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
const Time = () =>{
    const [firstVal, setFirstVal] = useState("");
    const [secondVal, setSecondVal] = useState("");

    const[firstSelect,setFirstSelect] = useState("min");
    const[secondSelect,setSecondSelect] = useState("hr");

    const buttonClick = (e) =>{
        setFirstVal(firstVal.concat(e.target.name));
    }
    
    useEffect(()=>{
        switch(firstSelect){
            case 'sec':
                if(secondSelect === "sec"){
                    setSecondVal(firstVal)
                }
                else if(secondSelect ==="min"){
                    setSecondVal(firstVal / 60)
                }
                else if(secondSelect ==="hr"){
                    setSecondVal(firstVal / 3600);
                }
                else if(secondSelect ==="d"){
                    setSecondVal(firstVal / 86400);
                }
                else if(secondSelect ==="w"){
                    setSecondVal(firstVal / 604800);
                }
                else if(secondSelect ==="m"){
                    setSecondVal(firstVal / 2628000);
                }
                else {
                    setSecondVal(firstVal / 31536000);
                }
               
                break;

            case 'min':
                if(secondSelect === "sec"){
                    setSecondVal(firstVal * 60 )
                }
                else if(secondSelect ==="min"){
                    setSecondVal(firstVal)
                }
                else if(secondSelect ==="hr"){
                    setSecondVal(firstVal / 60);
                }
                else if(secondSelect ==="d"){
                    setSecondVal(firstVal / 1440);
                }
                else if(secondSelect ==="w"){
                    setSecondVal(firstVal / 10080);
                }
                else if(secondSelect ==="m"){
                    setSecondVal(firstVal / 43800);
                }
                
                else{
                    setSecondVal(firstVal / 525600);
                }
                break;

            case 'hr':
                if(secondSelect === "sec"){
                    setSecondVal(firstVal * 3600 )
                }
                else if(secondSelect ==="min"){
                    setSecondVal(firstVal * 60)
                }
                else if(secondSelect ==="hr"){
                    setSecondVal(firstVal);
                }
                else if(secondSelect ==="d"){
                    setSecondVal(firstVal / 24);
                }
                else if(secondSelect ==="w"){
                    setSecondVal(firstVal / 168);
                }
                else if(secondSelect ==="m"){
                    setSecondVal(firstVal / 730);
                }
                
                else{
                    setSecondVal(firstVal / 8760);
                }
                break;

                case 'd':
                    if(secondSelect === "sec"){
                        setSecondVal(firstVal * 86400 )
                    }
                    else if(secondSelect ==="min"){
                        setSecondVal(firstVal * 1440)
                    }
                    else if(secondSelect ==="hr"){
                        setSecondVal(firstVal * 24);
                    }
                    else if(secondSelect ==="d"){
                        setSecondVal(firstVal);
                    }
                    else if(secondSelect ==="w"){
                        setSecondVal(firstVal / 7);
                    }
                    else if(secondSelect ==="m"){
                        setSecondVal(firstVal / 30.4166667);
                    }
                    
                    else{
                        setSecondVal(firstVal / 365);
                    }
                    break;

                    case 'w':
                        if(secondSelect === "sec"){
                            setSecondVal(firstVal * 604800 )
                        }
                        else if(secondSelect ==="min"){
                            setSecondVal(firstVal / 10080)
                        }
                        else if(secondSelect ==="hr"){
                            setSecondVal(firstVal * 168);
                        }
                        else if(secondSelect ==="d"){
                            setSecondVal(firstVal * 7);
                        }
                        else if(secondSelect ==="w"){
                            setSecondVal(firstVal );
                        }
                        else if(secondSelect ==="m"){
                            setSecondVal(firstVal * 4.3452381);
                        }
                       
                        else{
                            setSecondVal(firstVal / 52.1428571);
                        }
                        break;

                    case 'm':
                        if(secondSelect === "sec"){
                            setSecondVal(firstVal * 2628000 )
                        }
                        else if(secondSelect ==="min"){
                            setSecondVal(firstVal * 43800)
                        }
                        else if(secondSelect ==="hr"){
                            setSecondVal(firstVal * 730);
                        }
                        else if(secondSelect ==="d"){
                            setSecondVal(firstVal * 30.4166667);
                        }
                        else if(secondSelect ==="w"){
                            setSecondVal(firstVal * 4.3452381);
                        }
                        else if(secondSelect ==="m"){
                            setSecondVal(firstVal);
                        }
                       
                        else{
                            setSecondVal(firstVal / 12);
                        }
                        break;

                    case 'y':
                        if(secondSelect === "sec"){
                            setSecondVal(firstVal * 31536000 )
                        }
                        else if(secondSelect ==="min"){
                            setSecondVal(firstVal / 525600)
                        }
                        else if(secondSelect ==="hr"){
                            setSecondVal(firstVal * 8760);
                        }
                        else if(secondSelect ==="d"){
                            setSecondVal(firstVal * 365);
                        }
                        else if(secondSelect ==="w"){
                            setSecondVal(firstVal * 52.1428571);
                        }
                        else if(secondSelect ==="m"){
                            setSecondVal(firstVal * 12);
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
        setFirstSelect("min");
        setSecondSelect("hr");
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
            <h1>Time</h1>
            <div className="time"> 
            <div>  
            <select name="firstSelect" onChange={changeFirstSelect}>
                <option value="sec">Second</option>
                <option selected value="min">Minute</option>
                <option value="hr">Hour</option>
                <option value="d">Day</option>
                <option value="w">Week</option>
                <option value="m">Month</option>
                <option value="y">Year</option>
            </select>
            <input type="text" value={firstVal} onChange={changeVal} placeholder ={`Input ` + firstSelect}/>
            </div>
            <div> 
            <select name="secondSelect" onChange={changeSecondSelect}>
            <option value="sec">Second</option>
                <option  value="min">Minute</option>
                <option selected value="hr">Hour</option>
                <option value="d">Day</option>
                <option value="w">Week</option>
                <option value="m">Month</option>
                <option value="y">Year</option>
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

export default Time;