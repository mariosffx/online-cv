import classes from './Article.module.css';

const Article = ({ title, where, when, list, type, paragraph }) => {
  if (paragraph) {
    return <p className={classes.article}>{paragraph}</p>;
  }

  if (type === 'skills') {
    const skillItems = list.map(({ link, title, when, where }) => (
      <tr className={classes['skill-tree']} key={link}>
        <td>- </td>
        <td>
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </td>
        <td>{where}</td>
        <td>{when}</td>
      </tr>
    ));
    return (
      <table className={classes.article}>
        <thead>
          <tr className={classes['table-heading']}>
            <th colSpan={2}>Title</th>
            <th>Platform</th>
            <th>Date Issued</th>
          </tr>
        </thead>
        <tbody>{skillItems}</tbody>
      </table>
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
