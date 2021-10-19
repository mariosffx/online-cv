import React from 'react';
import classes from './SideBox.module.css';

const SideBox = ({ children, style = {} }) => {
  return (
    <div style={style} className={classes.sidebox}>
      {children}
    </div>
  );
};

export default SideBox;
