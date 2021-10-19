import React from 'react';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';
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

const Icon = ({ icon }) => {
  switch (icon) {
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
      return <FaPaintBrush />;
    case 'server':
      return <FaServer />;
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
      return <FaDatabase />;
    case 'tools':
      return <FaTools />;
    default:
      return <div>{icon}</div>;
  }
};

export default Icon;
