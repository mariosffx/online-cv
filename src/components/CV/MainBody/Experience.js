import React from 'react';
import Ruler from '../../UI/Ruler';
import Article from './Article';
import Icon from '../../UI/Icon';
import classes from './Experience.module.css';

const Experience = ({ title, icon, items }) => {
  const contentTableBody = items.map((item) => (
    <tr key={`${item.title}_${item.where}`}>
      <td className={classes['table-cell-ruler']}>
        <Ruler />
      </td>
      <td className={classes.article}>
        <Article {...item} />
      </td>
    </tr>
  ));

  return (
    <table className={classes['experience-table']}>
      <thead>
        <th>
          <h2 className={classes['head-icon']}>
            <Icon icon={icon} />
          </h2>
        </th>
        <th>
          <h2>{title}</h2>
        </th>
      </thead>
      <tbody>{contentTableBody}</tbody>
    </table>
  );
};

export default Experience;
