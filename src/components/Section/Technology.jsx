function Technology({ title, description }) {
  return (
    <li>
      <div className="display-flex justify-content-column">
        <div className="flex-basis-20">
          <strong>{title}:</strong>
        </div>
        <div>{description}</div>
      </div>
    </li>
  );
}

export { Technology };
