function Title({ text, className = '' }) {
  return (
    <h2 className={`margin-0 color-primary font-size-xl $className}`}>
      {text}
    </h2>
  );
}

export { Title };
