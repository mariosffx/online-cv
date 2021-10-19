import classes from './Article.module.css';

const Article = ({ title, where, when, list, type, paragraph }) => {
  if (paragraph) {
    return <p className={classes.article}>{paragraph}</p>;
  }

  if (type === 'skills') {
    const skillItems = list.map(({ link, title, where }) => (
      <li key={link}>
        <a href={link} target="_blank" rel="norefereer">
          {title}, {where}
        </a>
      </li>
    ));
    return (
      <article className={classes.article}>
        <ul className={classes['article-list']}>{skillItems}</ul>
      </article>
    );
  }

  const listItems =
    list?.map((item) => <li key="item">{item}</li>) || undefined;

  return (
    <article className={classes.article}>
      <div className={classes['article-title-container']}>
        <h3 className={classes['article-title']}>{title}</h3>
        {when && <div className={classes.when}>{when}</div>}
      </div>
      <h4>{where}</h4>
      {list && <ul className={classes['article-list']}>{listItems}</ul>}
    </article>
  );
};

export default Article;
