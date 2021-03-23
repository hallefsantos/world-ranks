const MainCointainer = ({ children }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <div 
                className="px-5 w-full max-w-5xl mx-auto antialiased"
            >
                {children}
            </div>
        </div>
    )
}
export default MainCointainer
