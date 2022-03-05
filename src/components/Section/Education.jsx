function Education({ title, school, location, dateFrom, dateTo }) {
  return (
    <li>
      <div className="display-flex justify-content-space-between">
        <div className="flex-basis-80">
          <strong>{title}</strong>, {school}, {location}
        </div>
        <div className="text-align-right">
          {dateFrom} - {dateTo}
        </div>
      </div>
    </li>
  );
}

export { Education };
