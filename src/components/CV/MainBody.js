import React from 'react';
import Box from '../UI/Box';
import IconWithText from '../UI/IconWithText';
import Experience from './Experience';
import mainPartData from './main-part-data';
import classes from './MainBody.module.css';

const MainBody = (props) => {
  const { introduction, professional, education, volunteer } = mainPartData;
  const professionalExperienceItems = professional.map((experience) => (
    <Experience key={experience.title + experience.where} {...experience} />
  ));

  const educationItems = education.map((experience) => (
    <Experience key={experience.title + experience.where} {...experience} />
  ));

  const volunteerItems = volunteer.map((experience) => (
    <Experience key={experience.title + experience.where} {...experience} />
  ));
  return (
    <main className={classes['main-body']}>
      <Box>
        <IconWithText type="title" icon="quote" text="Personal Statement" />
        <p>{introduction}</p>
      </Box>
      <Box>
        <IconWithText
          type="title"
          icon="professional"
          text="Professional Experience"
        />
        {professionalExperienceItems}
      </Box>
      <Box>
        <IconWithText
          type="title"
          icon="book"
          text="Professional Development"
        />
      </Box>
      <Box>
        <IconWithText type="title" icon="education" text="Education" />
        {educationItems}
      </Box>
      <Box>
        <IconWithText type="title" icon="help" text="Volunteer Experience" />
        {volunteerItems}
      </Box>
      <Box>
        <IconWithText type="title" icon="bookmark" text="Other Information" />
      </Box>
    </main>
  );
};

export default MainBody;
