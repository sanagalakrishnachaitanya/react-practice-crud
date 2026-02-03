import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GetUsers from './pages/GetUsers'
import ErrorPage from './pages/ErrorPage'
import AddUsers from './pages/AddUsers'
import Pagination from './pages/Pagination'
import Weather from './pages/Weather'

const App = () => {

  return (
    <div>
       <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<GetUsers/>}></Route> */}
          {/* <Route path='*' element={<Navigate to="/pagenotfound"/>}></Route> */}
          {/* <Route path='/pagenotfound' element={<ErrorPage/>}></Route> */}
          {/* <Route path='/add' element={<AddUsers/>}></Route> */}
          <Route path='/' element={<Pagination/>}></Route>
          {/* <Route path='/' element={<Weather></Weather>}></Route> */}
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App