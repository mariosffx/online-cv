import React from 'react';
import classes from './CV.module.css';

import MainBody from './MainBody';
import SidePart from './SidePart';

const CV = () => {
  return (
    <main className={classes.cv}>
      <SidePart />
      <MainBody />
    </main>
  );
};

export default CV;
