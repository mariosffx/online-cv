function Text({ text, children }) {
  if (children) {
    return <span>{children}</span>;
  }
  return <span>{text}</span>;
}

export { Text };
