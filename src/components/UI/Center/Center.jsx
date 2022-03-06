function Center({ children, className = '' }) {
  return (
    <div
      className={`display-flex flex-direction-column justify-content-center align-items-center ${className}`}
    >
      <div>{children}</div>
    </div>
  );
}
export { Center };
