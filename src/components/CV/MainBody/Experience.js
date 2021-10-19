import React from 'react';
import Article from './Article';
import Icon from '../../UI/Icon';
import classes from './Experience.module.css';

const Experience = ({ title, icon, items }) => {
  const articles = items.map((article) => (
    <Article key={article.title} {...article} />
  ));

  return (
    <section className={classes.experience}>
      <h2 className={classes.icon}>
        <Icon icon={icon} />
      </h2>
      <div className={classes['articles-container']}>
        <h2 className={classes['experience-title']}>{title}</h2>
        {articles}
      </div>
    </section>
  );
};

export default Experience;
