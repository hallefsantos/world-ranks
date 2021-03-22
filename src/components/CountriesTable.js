import { useState } from 'react'
import CountryItem from '../components/CountryItem'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const orderBy = (countries, value, direction) => {
    if (direction === 'asc') {
        return [...countries].sort((a, b) => a[value] > b[value] ? 1 : -1)
    } else if (direction === 'desc') {
        return [...countries].sort((a, b) => a[value] > b[value] ? -1 : 1)
    }
    return countries
}

const SortArrow = ({ direction }) => {
    if (!direction) return <></>
    if (direction === 'desc') {
        return (
            <IoIosArrowDown className="ml-1 text-green-500"/>
        )
    } else if (direction === 'asc') {
        return (
            <IoIosArrowUp className="ml-1 text-green-500"/>
        )
    }
}

const CountriesTable = ({ countries }) => {

    const [direction, setDirection] = useState()
    const [value, setValue] = useState()

    const orderedCountries = orderBy(countries, value, direction)

    const switchDirection = () => {
        if (!direction) {
            setDirection('desc')
        } else if (direction === 'desc'){
            setDirection('asc')
        } else {
            setDirection(null)
        }
    }

    const setValueAndDirection = (value) => {
        switchDirection()
        setValue(value)
    }
    
    return (
        <div className="mt-5">
            <div className="sticky top-0 z-10 hidden sm:flex mb-3 py-2 px-5 w-full text-gray-400 bg-gray-100">
                <div className="w-1/12"></div>
                <div className="w-5/12">
                    <button 
                        className="flex items-center focus:outline-none"
                        onClick={() => setValueAndDirection('name')}
                    >
                        Name
                        {value === 'name' && <SortArrow direction={direction} />}
                    </button>
                </div>
                <div className="w-2/12 text-center flex justify-center">
                    <button 
                        className="flex items-center focus:outline-none"
                        onClick={() => setValueAndDirection('population')}
                    >
                        Population
                        {value === 'population' && <SortArrow direction={direction} />}
                    </button>
                </div>
                <div className="w-2/12 text-center flex justify-center">
                    <button 
                        className="flex items-center focus:outline-none"
                        onClick={() => setValueAndDirection('area')}
                    >
                        Area (km²)
                        {value === 'area' && <SortArrow direction={direction} />}
                    </button>
                </div>
                <div className="w-2/12 text-center flex justify-center">
                    <button 
                        className="flex items-center focus:outline-none"
                        onClick={() => setValueAndDirection('gini')}
                    >
                        Gini
                        {value === 'gini' && <SortArrow direction={direction} />}
                    </button>
                </div>
            </div>

            <div className="space-y-5">
                {orderedCountries.map(country => (
                    <CountryItem key={country.id} country={country} />
                ))}
            </div>
        </div>
    )
}

export default CountriesTable
