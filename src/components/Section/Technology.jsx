import { Subtitle } from '.';

function Technology({ title, description }) {
  return (
    <li>
      <div>
        <div>
          <Subtitle text={title} />
        </div>
        <div>{description}</div>
      </div>
    </li>
  );
}

export { Technology };
