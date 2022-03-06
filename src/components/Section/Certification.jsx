import { SpaceBetween, A, ListItem, Text } from '../UI';

function Certification({ title, link, platform, date }) {
  let FinalTitle = <Text text={title} />;

  if (link) {
    FinalTitle = <A href={link} text={title} />;
  }

  return (
    <ListItem>
      <SpaceBetween>
        <Text>
          {FinalTitle}, {platform}
        </Text>
        <Text>{date}</Text>
      </SpaceBetween>
    </ListItem>
  );
}

export { Certification };
