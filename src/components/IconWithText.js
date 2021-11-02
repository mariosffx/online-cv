import React from 'react';
import classes from './IconWithText.module.css';

import Icon from './Icon';

const IconWithText = ({ type, icon, text, link }) => {
  icon = <Icon icon={icon} />;
  let renderText;
  let iconWithText = (
    <>
      {icon} {text}
    </>
  );

  switch (type) {
    case 'link':
      renderText = (
        <a
          className={classes.link}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {iconWithText}
        </a>
      );
      break;
    case 'title':
      renderText = <h2>{iconWithText}</h2>;
      break;
    default:
      renderText = <span>{iconWithText}</span>;
  }

  return <div className={classes['icon-with-text']}>{renderText}</div>;
};

export default IconWithText;
