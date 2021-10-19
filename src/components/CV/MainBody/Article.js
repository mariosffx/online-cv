import classes from './Article.module.css';

const Article = ({ title, where, when, listTitle, list }) => {
  const listItems =
    list?.map((item) => <li key="item">{item}</li>) || undefined;

  return (
    <article className={classes.article}>
      <div className={classes['article-title-container']}>
        <h3 className={classes['article-title']}>{title}</h3>
        <div className={classes.when}>{when}</div>
      </div>
      <h4>{where}</h4>
      {list && <ul className={classes['article-list']}>{listItems}</ul>}
    </article>
  );
};

export default Article;
