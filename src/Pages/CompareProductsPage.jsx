import React, { useState } from 'react';
import { Layout, Button, Modal } from 'antd';
import ComparisonTable from '../Components/ComparisonTable';
import ProductTable from '../Components/ProductTable';

const { Content } = Layout;

const CompareProductsPage = ({ comparedProducts, setComparedProducts }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showAddMoreModal = () => {
    setIsModalVisible(true);
  };

  const handleAddMore = (product) => {
    if (comparedProducts.length < 4 && !comparedProducts.some(p => p.id === product.id)) {
      setComparedProducts([...comparedProducts, product]);
      setIsModalVisible(false);
    }
  };

  const removeProduct = (id) => {
    setComparedProducts(comparedProducts.filter(p => p.id !== id));
  };

  return (
    <Content className="content">
      <ComparisonTable products={comparedProducts} removeProduct={removeProduct} />
      <Button type="primary" onClick={showAddMoreModal} disabled={comparedProducts.length >= 4} className='add-btn'>
        Add More
      </Button>
      <Modal
        title="Add More Products"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={1000}
      >
        <ProductTable onCompare={handleAddMore} comparedProductIds={comparedProducts.map(p => p.id)} hideCol={true}/>
      </Modal>
    </Content>
  );
};

export default CompareProductsPage;
