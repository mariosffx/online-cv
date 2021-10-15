import React from 'react';
import Ruler from '../UI/Ruler';
import Article from './Article';
import Icon from '../UI/Icon';
import classes from './Experience.module.css';

const Experience = ({ title, icon, items }) => {
  const content = items.map((item) => (
    <div className={classes.experience}>
      <Ruler />
      <Article key={`${item.title}_${item.where}`} {...item} />
    </div>
  ));

  return (
    <div className={classes['experience-container']}>
      <h2 className={classes['experience-title']}>
        <Icon icon={icon} />
        <div>{title}</div>
      </h2>
      {content}
    </div>
  );
};

export default Experience;
