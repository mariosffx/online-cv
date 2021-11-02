import React from 'react';
import Experience from './Experience';
import mainPartData from '../assets/data/main-part-data';
import classes from './MainBody.module.css';

const MainBody = () => {
  const { experiences } = mainPartData;
  const experienceItems = experiences.map((experience) => (
    <Experience key={experience.title} {...experience} />
  ));

  return <main className={classes['main-body']}>{experienceItems}</main>;
};

export default MainBody;
