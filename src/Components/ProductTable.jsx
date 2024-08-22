import React, { useState, useEffect } from 'react';
import { Table, Button, Spin } from 'antd';
import { getProducts } from '../Services/productService';
import { useNavigate } from 'react-router-dom';
import './Combine.css';

const ProductTable = ({ onCompare, comparedProductIds, hideCol }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProductsData = async()=>{
    setLoading(true);
    try {
      const result = await getProducts()
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getProductsData()
  }, []);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Discount Percentage',
      dataIndex: 'discountPercentage',
      key: 'discountPercentage',
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Image',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      render: (text) => <img src={text} alt="Product" className="product-img" />,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button
          type="primary"
          disabled={comparedProductIds.includes(record.id)}

          onClick={() => {
            onCompare(record);
            navigate('/compare');
          }}
        >
          {comparedProductIds.includes(record.id) ? 'Added' : 'Compare'}
        </Button>
      ),
    },
  ];

  if (loading) {
    return <Spin />;
  }

  return <Table dataSource={products} columns={columns} rowKey="id" pagination={{ pageSize: 10 }}   scroll={{ x: '100%' }} />;
};

export default ProductTable;
