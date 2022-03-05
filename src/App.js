import './App.css';
import { PersonalDetails, Resume, Section } from './components';
import {
  personal_details,
  work_experience,
  education,
  technologies,
  volunteer,
  certifications,
} from './assets/data';
import { interests } from './assets/data/interests';

function App() {
  return (
    <Resume>
      <PersonalDetails {...personal_details} />
      <Section {...work_experience} />
      <Section {...technologies} />
      <Section {...education} />
      <Section {...volunteer} />
      <Section {...certifications} />
      <Section {...interests} />
    </Resume>
  );
}

export default App;
