function Container({ children, type }) {
  if (type === 'work_experience') {
    return <div>{children}</div>;
  }
  return <ul>{children}</ul>;
}

export { Container };
