import React from 'react';
import { Layout } from 'antd';
import { UserAddOutlined, ProductOutlined } from '@ant-design/icons';
import './Combine.css';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="navbar">
      <div className="logo"><ProductOutlined /> Products</div>
      <div className="user-profile"><UserAddOutlined />  Profile</div>
    </Header>
  );
};

export default Navbar;
