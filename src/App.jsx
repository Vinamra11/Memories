import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { cartApi } from './services/apiSlice'

import store from './app/store'
import Navbar from './components/Navbar'
import Products from "./components/Products"
import Cart from './components/Cart'

function App() {

  return (
    <BrowserRouter>
      {/* <ApiProvider api={cartApi}> */}
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route index element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Provider>
      {/* </ApiProvider> */}
    </BrowserRouter>
  )
}

export default App
