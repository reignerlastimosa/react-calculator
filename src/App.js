
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

 

  import Calculator from "./pages/Calculator";
  import Length from "./pages/Length";
  import Byte from "./pages/Byte";
  import Temperature from "./pages/Temperature";
  import Time from "./pages/Time";
  import Mass from "./pages/Mass";
  
  import "./style.scss";

 

  const App = () => {
    return (
      <div className="App">
        
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Calculator/>}/>
        
        <Route path="/length" element={<Length/>}/>
        <Route path="/byte" element={<Byte/>}/>
        <Route path="/temperature" element={<Temperature/>}/>
        <Route path="/time" element={<Time/>}/>
        <Route path="/mass" element={<Mass/>}/>
          </Routes>
          </BrowserRouter>
      </div>
    );
  }
  
  export default App;