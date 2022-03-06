import { Center } from '../UI';

function Resume({ children }) {
  return (
    <Center className="max-width-50 margin-left-auto margin-right-auto background-color-light padding-32px border-radius-25px margin-y-24px border-color-dark border-width-1px border-style-solid border-width-1px print-max-width-100 print-border-width-0">
      {children}
    </Center>
  );
}

export { Resume };
