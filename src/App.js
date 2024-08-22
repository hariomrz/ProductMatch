import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import CompareProductsPage from './Pages/CompareProductsPage';
import './CommonStyle/global.css';

const App = () => {
  const [comparedProducts, setComparedProducts] = useState([]);

  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <ProductDetailsPage
                  comparedProducts={comparedProducts}
                  setComparedProducts={setComparedProducts}
                />
              }
            />
            <Route
              path="/compare"
              element={
                <CompareProductsPage
                  comparedProducts={comparedProducts}
                  setComparedProducts={setComparedProducts}
                />
              }
            />
          </Routes>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
