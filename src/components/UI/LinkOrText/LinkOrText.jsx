import { A, Text } from '..';

function LinkOrText({ href, text }) {
  return href ? <A href={href}>{text}</A> : <Text>{text}</Text>;
}

export { LinkOrText };
