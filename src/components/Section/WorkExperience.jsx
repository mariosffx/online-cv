import { Subtitle } from './Subtitle';
import { A } from '../UI';

function WorkExperience({
  title,
  companyName,
  location,
  dateFrom,
  dateTo,
  position,
  items,
  link,
  description,
}) {
  const listItems = items.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="margin-bottom-16px">
      <div className="display-flex justify-content-space-between">
        <div className="flex-basis-30">
          <Subtitle text={title} className="margin-0" />
          <div>{position}</div>
        </div>
        <div className="flex-basis-30 text-align-center">
          <A href={link}>
            <h3 className="margin-0">{companyName}</h3>
          </A>
          <div>{location}</div>
        </div>
        <h3 className="margin-0 flex-basis-30 text-align-right">
          {dateFrom} - {dateTo}
        </h3>
      </div>
      <div className="margin-4px">{description}</div>
      <ul className="margin-0">{listItems}</ul>
    </div>
  );
}

export { WorkExperience };
