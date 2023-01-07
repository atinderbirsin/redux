function Button({ children, primary, secondary, danger, rounded, outline, ...rest }) {
  let classes = "px-3 py-1.5 text-white ";
  classes += primary
    ? "bg-blue-500 border border-blue-500 "
    : secondary
    ? "bg-yellow-500 border border-yellow-500 "
    : danger
    ? "bg-red-500 border-red-500 " : "";

  classes += outline ? "outline text-black " : "";

  classes += rounded ? "rounded " : "";

  return (
    <div>
      <button {...rest} className={`${classes} ${rest.className}`}>
        {children}
      </button>
    </div>
  );
}

export default Button;
