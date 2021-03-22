import Link from 'next/link'

const CountryItem = ({ country }) => {
    return (
        <Link
            href={`country/${country.alpha3Code}`}
        >
            <div 
                className="cursor-pointer relative pl-20 sm:pl-5 p-3 sm:p-5 flex flex-col sm:flex-row sm:items-center w-full bg-white hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-50 shadow-sm hover:shadow-md rounded-lg transform translate-y-0 hover:-translate-y-1 transition duration-200 text-sm md:text-base text-gray-700 hover:text-white dark:text-gray-50 dark:hover:text-gray-600 space-y-1 sm:space-y-0"
            >
                <span className="absolute sm:relative top-5 sm:top-0 left-5 sm:left-0 sm:w-1/12">
                    <img
                        className="w-10 lg:w-14 rounded-sm" 
                        src={country.flag}
                        alt="Afghanistan" 
                    />
                </span>
                <span className="sm:w-5/12">
                    {country.name}
                </span>
                <span className="sm:w-2/12 sm:text-center">
                    <span className="sm:hidden text-gray-400">Population: </span>
                    {country.population}
                </span>
                <span className="sm:w-2/12 sm:text-center">
                    <span className="sm:hidden text-gray-400">Area (km²): </span>
                    {country.area ?? 0 }
                </span>
                <span className="sm:w-2/12 sm:text-center">
                    <span className="sm:hidden text-gray-400">Gini: </span>
                    {country.gini ?? 0 }%
                </span>
            </div>
        </Link>
    )
}

export default CountryItem