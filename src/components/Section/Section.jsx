import { Renderer, Ruler, Title } from '../Section';
import { Container, Divider } from '../UI';

function Section({ title = 'Check title', items = [], type }) {
  const sectionItems = items.map((item) => (
    <Renderer key={item.title} type={type} {...item} />
  ));

  return (
    <Divider className="margin-y-4">
      <Title text={title} />
      <Ruler />
      <Container type={type}>{sectionItems}</Container>
    </Divider>
  );
}

export { Section };
