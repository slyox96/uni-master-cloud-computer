import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import TestHome from './Test/TestHome.tsx';
import Layout from './pages/layout/Layout.tsx';
import { Admin } from './pages/Admin.tsx';
import { Cart } from './pages/Cart.tsx';
import { Shop } from './pages/Shop.tsx';
import TestA from './Test/TestA.tsx';
import TestB from './Test/TestB.tsx';

import './index.scss'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<TestHome />} />
      <Route path="/TestA" element={<TestA />} />
      <Route path="/TestB" element={<TestB />} />
      <Route path="/" element={<Layout />}>
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Admin" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
