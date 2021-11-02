import React from 'react';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { IoLanguage, IoLogoNodejs } from 'react-icons/io5';
import { SiMaterialui, SiPostgresql } from 'react-icons/si';
import { MdOutlineDriveEta, MdMiscellaneousServices } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { DiGitBranch } from 'react-icons/di';
import {
  FaPhoneAlt,
  FaLocationArrow,
  FaEnvelope,
  FaLinkedinIn,
  FaLaptopCode,
  FaUniversity,
  FaHandHoldingHeart,
  FaRegBookmark,
  FaBriefcase,
  FaQuoteLeft,
  FaBook,
  FaPaintBrush,
  FaServer,
  FaCode,
  FaDesktop,
  FaDatabase,
  FaTools,
  FaReact,
} from 'react-icons/fa';

import { AiFillCodeSandboxCircle } from 'react-icons/ai';

const Icon = ({ icon }) => {
  switch (icon) {
    case 'miscComp':
      return <AiFillCodeSandboxCircle />;
    case 'miscSkills':
      return <MdMiscellaneousServices />;
    case 'drive':
      return <MdOutlineDriveEta />;
    case 'languages':
      return <IoLanguage />;
    case 'skill':
      return <GiSkills />;
    case 'react':
      return <FaReact />;
    case 'quote':
      return <FaQuoteLeft />;
    case 'phone':
      return <FaPhoneAlt />;
    case 'professional':
      return <FaBriefcase />;
    case 'email':
      return <FaEnvelope />;
    case 'location':
      return <FaLocationArrow />;
    case 'linkedin':
      return <FaLinkedinIn />;
    case 'language':
      return <BiMessageRoundedDetail />;
    case 'education':
      return <FaUniversity />;
    case 'design':
      return <SiMaterialui />;
    case 'server':
      return <IoLogoNodejs />;
    case 'code':
      return <FaCode />;
    case 'stack':
      return <FaLaptopCode />;
    case 'volunteer':
      return <FaHandHoldingHeart />;
    case 'book':
      return <FaBook />;
    case 'bookmark':
      return <FaRegBookmark />;
    case 'os':
      return <FaDesktop />;
    case 'db':
      return <SiPostgresql />;
    case 'tools':
      return <DiGitBranch />;
    default:
      return <div>{icon}</div>;
  }
};

export default Icon;
