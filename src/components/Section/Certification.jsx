import { SpaceBetween, ListItem, Text, LinkOrText } from '../UI';

function Certification({ title, link, platform, date }) {
  return (
    <ListItem>
      <SpaceBetween>
        <Text>
          <LinkOrText text={title} href={link} />, {platform}
        </Text>
        <Text>{date}</Text>
      </SpaceBetween>
    </ListItem>
  );
}

export { Certification };
