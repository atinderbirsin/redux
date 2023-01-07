function Header({ children, ...rest }) {
  return (
    <h1
      {...rest}
      className={`text-3xl font-semibold text-blue-500 flex gap-2 items-center ${rest.className}`}
    >
      {children}
    </h1>
  );
};

export default Header;
