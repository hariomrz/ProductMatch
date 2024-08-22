import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import './Combine.css';

const ComparisonTable = ({ products, removeProduct }) => {
  if (products.length === 0) {
    return <p className='emty-screen'>No products to compare.</p>;
  }

  return (
    <div className="comparison-card-container">
      <Row gutter={16}>
        {products.map(product => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={product.title}
              extra={
                <Button type="link" onClick={() => removeProduct(product.id)}>
                  Remove
                </Button>
              }
              cover={<img alt={product.title} src={product.thumbnail} />}
              className="comparison-card"
            >
              <p>Price ${product.price}</p>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Description: {product.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ComparisonTable;
