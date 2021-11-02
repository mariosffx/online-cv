import React from 'react';
import classes from './SidePart.module.css';
import SideBox from './SideBox';
import sidePartData from '../assets/data/side-part-data';
import IconWithText from './IconWithText';
import Skill from './Skill';
import profilePicture from '../assets/imgs/profile_pic.jfif';

const SidePart = () => {
  const {
    profession,
    firstName,
    lastName,
    contactDetails,
    skills,
    miscSkills,
  } = sidePartData;

  const contactDetailItems = contactDetails.map((contactInfo) => (
    <IconWithText key={contactInfo.text} {...contactInfo} />
  ));

  const skillItems = skills.map((skill) => (
    <Skill key={skill.icon} {...skill} />
  ));
  const miscSkillItems = miscSkills.map((skill) => (
    <Skill key={skill.icon} {...skill} />
  ));

  return (
    <aside className={classes['side-part']}>
      <SideBox>
        <div className={classes.name}>
          <figure className={classes['profile-picture']}>
            <img src={profilePicture} alt={`${firstName} ${lastName}`} />
          </figure>
          <h2>{firstName}</h2>
          <h3>{lastName}</h3>
          <h1>{profession}</h1>
        </div>
      </SideBox>
      <SideBox
        style={{
          paddingLeft: 20,
        }}
      >
        {contactDetailItems}
      </SideBox>
      <SideBox>
        <IconWithText icon="stack" type="title" text="Skills" />
        {skillItems}
      </SideBox>
      <SideBox>
        <IconWithText icon="miscSkills" type="title" text="Misc. Skills" />
        {miscSkillItems}
      </SideBox>
    </aside>
  );
};

export default SidePart;
