import React from 'react';
import classes from './CV.module.css';

import MainBody from './MainBody/MainBody';
import SidePart from './SidePart/SidePart';

const CV = () => {
  return (
    <main className={classes.cv}>
      <SidePart />
      <MainBody />
    </main>
  );
};

export default CV;
