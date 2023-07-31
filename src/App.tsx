import React, { ReactElement } from 'react';
import logo from './logo.svg';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navigator from './Components/Navigator';
import HealthCare from './Pages/HealthCare';


function App() : ReactElement {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigator/>}>
           <Route path="/healthcare" element={<HealthCare/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
