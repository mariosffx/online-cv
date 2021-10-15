import React from 'react';
import classes from './Experience.module.css';

const Experience = ({ title, where, when, listTitle, list }) => {
  const listItems =
    list?.map((item) => <li key="item">{item}</li>) || undefined;

  return (
    <section className={classes.experience}>
      <div className={classes['experience-ruler']} />
      <div className={classes['experience-content']}>
        <h3>
          <div className={classes['experience-header']}>
            <div className={classes['experience-title']}>{title}</div>
            {when && <div>{when}</div>}
          </div>
          <div>{where}</div>
        </h3>
        {list && (
          <>
            <h4>{listTitle}</h4>
            <ul className={classes['experience-list']}>{listItems}</ul>
          </>
        )}
      </div>
    </section>
  );
};
export default Experience;
