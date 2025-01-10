import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.scss'
import TestA from './Test/TestA.tsx'
import TestHome from './Test/TestHome.tsx';
import TestB from './Test/TestB.tsx';
import Layout from './pages/layout/Layout.tsx';
import { Admin } from './pages/Admin.tsx';
import { Cart } from './pages/Cart.tsx';
import { Shop } from './pages/Shop.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<TestHome />} />
      <Route path="/" element={<Layout />}>
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Admin" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
