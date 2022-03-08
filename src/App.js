import { PersonalDetails, Resume, Section } from './components';
import {
  personal_details,
  work_experience,
  education,
  technologies,
  volunteer,
  certifications,
} from './assets/data';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Resume>
        <PersonalDetails {...personal_details} />
        <Section {...work_experience} />
        <Section {...technologies} />
        <Section {...education} />
        <Section {...volunteer} />
        <Section {...certifications} />
      </Resume>
    </div>
  );
}

export default App;
