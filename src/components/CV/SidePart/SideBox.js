import React from 'react';
import classes from './SideBox.module.css';

const SideBox = ({ children }) => {
  return <div className={classes.sidebox}>{children}</div>;
};

export default SideBox;
