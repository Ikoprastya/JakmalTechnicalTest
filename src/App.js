import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';


import  Header from './pages/Header';
import  Delivery from './pages/Delivery';
import  Payment from './pages/Payment';
import  Finish from './pages/Finish';
import  NoPage from './pages/NoPage';

function App() {
  return (
    <div>
    <BrowserRouter>
          <Routes>
            
              <Route path="/" element={<Header />}>
                <Route index element={<Delivery />} />
                <Route path="/payment" element={<Payment />}/>
                <Route path="/finish" element={<Finish />}/>
                <Route path="*" element={<NoPage />} />
              </Route>
       


          </Routes>

    </BrowserRouter>
</div>
  );
}

export default App;
