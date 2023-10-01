import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import MyNavbar from "./components/navbar/navbar"
import Routers from './Routes/index.js';



function App() {
  return (
    <>
      <BrowserRouter>
          <MyNavbar />
          <div>
              <Routers />
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
