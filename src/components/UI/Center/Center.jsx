function Center({ children, className = '' }) {
  return (
    <div
      className={`xl-max-width-960px display-flex flex-direction-column justify-content-center align-items-center ${className}`}
    >
      <div>{children}</div>
    </div>
  );
}
export { Center };
