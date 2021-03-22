const CountryRow = ({ label, content }) => {
    return (
        <div className="py-5 flex justify-between font-medium">
            <span className="text-gray-300">{label}</span>
            <span className="text-gray-700">{content}</span>
        </div>
    )
}

export default CountryRow
