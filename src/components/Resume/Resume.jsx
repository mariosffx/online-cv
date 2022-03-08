import { Center } from '../UI';

function Resume({ children }) {
  return (
    <Center className="xl-max-width-960px margin-left-auto margin-right-auto background-color-light padding-32px margin-y-24px border-width-1px print-max-width-100 print-border-width-0">
      {children}
    </Center>
  );
}

export { Resume };
