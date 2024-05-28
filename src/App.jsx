// Libraries
import { Routes, Route } from 'react-router-dom';
// JSX
import Loyout from './Components/Loyout/Loyout';
import { Slider } from './Components/Slider/Slider';
import Products from './Pages/Products/Products';
// CSS
import './App.css';

export default function App({ products }) {

  return (
    <div className="container_app">
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Slider />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/shopCarts" element={<div>shoping</div>} />
          <Route path="/profileUser" element={<div>profile</div>} />
        </Route>
      </Routes>
    </div>
  );
}