import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  UnorderedListOutlined,
  TableOutlined
} from '@ant-design/icons';
import './Combine.css';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider className="sidebar" width={200}>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<TableOutlined />}>
          <Link to="/">Product Details</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UnorderedListOutlined />}>
          <Link to="/compare">Compare Products</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
