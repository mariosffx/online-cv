import {
  Education,
  WorkExperience,
  Technology,
  Volunteer,
  InvalidItem,
  Certification,
  Interest,
} from '.';

function Renderer(props) {
  const { type } = props;
  let Render;
  switch (type) {
    case 'education':
      Render = Education;
      break;
    case 'work_experience':
      Render = WorkExperience;
      break;
    case 'technologies':
      Render = Technology;
      break;
    case 'volunteer':
      Render = Volunteer;
      break;
    case 'certifications':
      Render = Certification;
      break;
    case 'interests':
      Render = Interest;
      break;
    default:
      Render = InvalidItem;
  }
  return <Render {...props} />;
}

export { Renderer };
