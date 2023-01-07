function Panel({ children, ...rest }) {
    return (
        <div {...rest} className={`w-full flex flex-col gap-2 items-center mb-16 ${rest.className}`}>
            {children}
        </div>
    )
};

export default Panel;