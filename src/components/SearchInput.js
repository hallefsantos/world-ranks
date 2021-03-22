import { HiSearch } from 'react-icons/hi'

const SearchInput = ({ className, ...rest }) => {
    return (
        <div className={`w-full relative ${className}`}>
            <span className="ml-4 absolute inset-y-0 flex items-center">
                <HiSearch className="w-5 h-5 text-gray-300" />
            </span>
            <input 
                className="w-full py-4 pl-14 pr-5 bg-white rounded-lg placeholder-gray-300 focus:outline-none"
                type="text" 
                placeholder="Filter by Name, Region or Subregion"
                {...rest}
            />
        </div>
    )
}

export default SearchInput
