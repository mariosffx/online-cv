import React from 'react';
import Icon from '../../UI/Icon';
import classes from './Skill.module.css';

const Skill = ({ icon, text, details }) => {
  icon = <Icon icon={icon} />;
  return (
    <div className={classes.skill}>
      <div className={classes['icon-container']}>{icon}</div>
      <div className={classes['skill-details']}>
        <h4>{text}</h4>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Skill;
