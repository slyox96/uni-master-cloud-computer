import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.scss'
import TestA from './Test/TestA.tsx'
import TestHome from './Test/TestHome.tsx';
import TestB from './Test/TestB.tsx';
import Layout from './pages/layout/Layout.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<TestHome />} />
      <Route path="/" element={<Layout />}>
        <Route path="/Shop" element={<TestA />} />
        <Route path="/Admin" element={<TestB />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
