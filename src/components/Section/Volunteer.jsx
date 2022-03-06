import { Text, ListItem, SpaceBetween } from '../UI';

function Volunteer({ title, location, dateFrom, dateTo }) {
  return (
    <ListItem>
      <SpaceBetween>
        <Text>
          {title}, {location}
        </Text>
        <Text>
          {dateFrom} - {dateTo}
        </Text>
      </SpaceBetween>
    </ListItem>
  );
}

export { Volunteer };
