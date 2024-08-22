import React from 'react';
import { Button } from 'antd';

const CompareButton = ({ onClick, disabled, children }) => {
  return (
    <Button type="primary" onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default CompareButton;
