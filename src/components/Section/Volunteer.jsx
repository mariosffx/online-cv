import { Text, ListItem, SpaceBetween, LinkOrText } from '../UI';

function Volunteer({ title, location, dateFrom, dateTo, link }) {
  return (
    <ListItem>
      <SpaceBetween>
        <LinkOrText href={link} text={`${title}, ${location}`} />
        <Text>
          {dateFrom} - {dateTo}
        </Text>
      </SpaceBetween>
    </ListItem>
  );
}

export { Volunteer };
