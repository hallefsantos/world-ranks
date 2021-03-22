const Panel = ({ children, className }) => {
    return (
        <div className={`p-5 bg-white dark:bg-gray-800 rounded-lg shadow ${className}`}>
            {children}
        </div>
    )
}

export default Panel
