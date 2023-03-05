import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BasicDetails from './components/addproperty/basic/BasicDetails';
import GenInfo from './components/addproperty/general/GenInfo';
import LocateInfo from './components/addproperty/location/LocateInfo';
import PropDetails from './components/addproperty/property/PropDetails';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Home from './components/MainPage/Home';




function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/basicdetail' element={<BasicDetails />} />
          <Route path='/prodetail' element={<PropDetails />} />
          <Route path='/geninfo' element={<GenInfo />} />
          <Route path='/location' element={<LocateInfo />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
