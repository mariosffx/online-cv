import React from 'react';
import classes from './Box.module.css';

const Box = ({ children }) => {
  return <div className={classes.box}>{children}</div>;
};

export default Box;
