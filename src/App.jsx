import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/store'
import Navbar from './components/Navbar'
import Products from "./components/Products"
import Cart from './components/Cart'

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route index element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
