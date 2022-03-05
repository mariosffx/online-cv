import { Renderer, Container } from '../Section';

function Section({ title = 'Check title', items = [], type }) {
  const sectionItems = items.map((item) => (
    <Renderer key={item.title} type={type} {...item} />
  ));

  return (
    <div className="margin-y-4">
      <h2 className="margin-0 color-primary">{title}</h2>
      <hr className="margin-bottom-4 border-color-primary" />
      <Container type={type}>{sectionItems}</Container>
    </div>
  );
}

export { Section };
