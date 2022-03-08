function A({ href, children }) {
  return (
    <a className="color-dark" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
export { A };
