import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import MainCointainer from '../../components/MainCointainer'
import Header from '../../components/Header'
import Panel from '../../components/Panel'
import CountryRow from '../../components/CountryRow'
import Footer from '../../components/Footer'

const getCountry = async (id) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
    return await res.json()
}

const Country = ({ country }) => {
    const [borders, setBorders] = useState([])

    const getBorders = async () => {
        const borders = await Promise.all(country.borders.map(border => getCountry(border)))
        setBorders(borders)
    }

    useEffect(() => {
        getBorders()
    }, [country]);

    return (
        <MainCointainer>
            <Head>
                <title>{country.name} | World Ranks</title>
            </Head>

            <Header />
            
            <main className="flex flex-wrap md:flex-nowrap items-start space-y-5 md:space-y-0 md:space-x-5">
                <Panel className="w-full md:w-2/5 text-center text-gray-700 dark:text-gray-200">
                    <img 
                        className="rounded"
                        src={country.flag} 
                        alt={`${country.name} Flag`}
                    />
                    <h1 
                        className="mt-8 text-xl sm:text-2xl lg:text-3xl font-medium leading-none"
                    >
                        {country.name}
                    </h1>
                    <div className="mt-2 text-sm">{country.subregion}</div>

                    <div className="mt-5 grid grid-cols-2">
                        <div className="flex flex-col items-center">
                            <strong>{country.population}</strong>
                            <span className="text-gray-300 font-medium">Population</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <strong>{country.area}</strong>
                            <span className="text-gray-300 font-medium">Area</span>
                        </div>
                    </div>
                </Panel>
                    
                <Panel className="w-full md:w-3/5">
                    <h2 className="text-gray-700 dark:text-gray-100 font-medium">Details</h2>

                    <div className="divide-y divide-light-blue-400">
                        <CountryRow 
                            label="Capital" 
                            content={country.capital}
                        />
                        <CountryRow 
                            label="Languages" 
                            content={country.languages.map(language => language.name).join(', ')}
                        />
                        <CountryRow 
                            label="Currencies" 
                            content={country.currencies.map(currency => currency.code).join(', ')}
                        />
                        <CountryRow 
                            label="Native name" 
                            content={country.nativeName}
                        />

                        {country.gini && (
                            <CountryRow 
                                label="Gini" 
                                content={`${country.gini}%`}
                            />
                        )}

                        {borders.length > 0 && (
                            <div className="py-5">
                                <span className="font-medium text-gray-300">Neighbouring Countries</span>

                                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                                    {borders.map(({ name, flag, alpha3Code }) => (
                                        <Link href={`/country/${alpha3Code}`}>
                                            <div className="cursor-pointer">
                                                <img 
                                                    className="rounded-sm"
                                                    src={flag} 
                                                    alt={`${name} Flag`}
                                                />
                                                <h3 
                                                    className="mt-2 text-gray-700 dark:text-gray-200 text-center font-semibold"
                                                >
                                                    {name}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Panel>
            </main>
            <Footer />
        </MainCointainer>
    )
}

export default Country

export async function getStaticPaths() {
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const countries = await res.json()

    const paths = countries.map(country => ({
        params: {id: country.alpha3Code}
    }))

    return {
        paths,
        fallback: false
    }
}
  
export const getStaticProps = async ({ params }) => {
    const country = await getCountry(params.id)

    return {
        props: {
            country
        },
    }
}