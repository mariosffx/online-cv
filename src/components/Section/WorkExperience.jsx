import { Subtitle } from './Subtitle';

function WorkExperience({
  title,
  companyName,
  location,
  dateFrom,
  dateTo,
  position,
  items,
}) {
  const listItems = items.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="margin-bottom-8">
      <div className="display-flex justify-content-space-between">
        <div className="flex-basis-30">
          <Subtitle text={title} className="margin-0" />
          <div>{position}</div>
        </div>
        <div className="flex-basis-30 text-align-center">
          <h3 className="margin-0">{companyName}</h3>
          <div>{location}</div>
        </div>
        <h3 className="margin-0 flex-basis-30 text-align-right">
          {dateFrom} - {dateTo}
        </h3>
      </div>
      <ul className="margin-0">{listItems}</ul>
    </div>
  );
}

export { WorkExperience };
