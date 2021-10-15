import React from 'react';
import classes from './SidePart.module.css';

import SideBox from './SideBox';

import sidePartData from './side-part-data';
import IconWithText from '../UI/IconWithText';
import Skill from './Skill';

const SidePart = () => {
  const { profession, firstName, lastName, contactDetails, skills } =
    sidePartData;

  const contactDetailItems = contactDetails.map((contactInfo) => (
    <IconWithText key={contactInfo.text} {...contactInfo} />
  ));

  // const languageItems = languages.map((language) => (
  //   <Skill key={language.icon} {...language} />
  // ));

  const skillItems = skills.map((skill) => (
    <Skill key={skill.icon} {...skill} />
  ));

  return (
    <aside className={classes['side-part']}>
      <SideBox>
        <div className={classes.name}>
          <h2>{firstName}</h2>
          <h3>{lastName}</h3>
          <h1>{profession}</h1>
        </div>
      </SideBox>
      <SideBox>{contactDetailItems}</SideBox>
      {/* <SideBox>
        <IconWithText icon="language" type="title" text="Languages" />
        {languageItems}
      </SideBox> */}
      <SideBox>
        <IconWithText icon="stack" type="title" text="Skills" />
        {skillItems}
      </SideBox>
    </aside>
  );
};

export default SidePart;
