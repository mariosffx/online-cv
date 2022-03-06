import { Subtitle } from '.';
import { Divider, ListItem, SpaceBetween, Text } from '../UI';

function Education({ title, school, location, dateFrom, dateTo }) {
  return (
    <ListItem>
      <SpaceBetween>
        <Divider>
          <Subtitle text={title} />
          <Text>
            {school}, {location}
          </Text>
        </Divider>
        <Text>
          {dateFrom} - {dateTo}
        </Text>
      </SpaceBetween>
    </ListItem>
  );
}

export { Education };
