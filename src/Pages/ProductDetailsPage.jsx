import React, { useState } from 'react';
import { Layout } from 'antd';
import ProductTable from '../Components/ProductTable';

const { Content } = Layout;

const ProductDetailsPage = () => {
  const [comparedProducts, setComparedProducts] = useState([]);

  const handleCompare = (product) => {
    setComparedProducts([...comparedProducts, product]);
  };

  return (
    <Content className="content">
      <ProductTable onCompare={handleCompare} comparedProductIds={comparedProducts.map(p => p.id)} />
    </Content>
  );
};

export default ProductDetailsPage;
