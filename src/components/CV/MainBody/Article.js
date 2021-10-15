import classes from './Article.module.css';

const Article = ({ title, where, when, listTitle, list }) => {
  const listItems =
    list?.map((item) => <li key="item">{item}</li>) || undefined;

  return (
    <article className={classes['article-content']}>
      <h3>
        <div className={classes['article-header']}>
          <div className={classes['article-title']}>{title}</div>
          {when && <div>{when}</div>}
        </div>
        <div>{where}</div>
      </h3>
      {list && (
        <>
          <h4>{listTitle}</h4>
          <ul className={classes['article-list']}>{listItems}</ul>
        </>
      )}
    </article>
  );
};

export default Article;
