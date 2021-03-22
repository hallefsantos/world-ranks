const Panel = ({ children, className }) => {
    return (
        <div className={`p-5 bg-white rounded-lg shadow ${className}`}>
            {children}
        </div>
    )
}

export default Panel
