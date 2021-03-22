import MainCointainer from '../components/MainCointainer'
import Header from '../components/Header'
import Panel from '../components/Panel'
import CountryRow from '../components/CountryRow'
import Footer from '../components/Footer'

const single = () => {

    return (
        <MainCointainer>
            <Header />
            
            <main className="flex flex-wrap md:flex-nowrap items-start space-y-5 md:space-y-0 md:space-x-5">
                <Panel className="w-full md:w-2/5 text-center text-gray-700">
                    <img 
                        className="rounded"
                        src="https://restcountries.eu/data/usa.svg" 
                        alt="USA Flag"
                    />
                    <h1 
                        className="mt-8 text-xl sm:text-2xl lg:text-3xl font-medium leading-none"
                    >
                        The United States of America
                    </h1>
                    <div className="mt-2 text-sm">North America</div>

                    <div className="mt-5 grid grid-cols-2">
                        <div className="flex flex-col items-center">
                            <strong>27657145</strong>
                            <span className="text-gray-300 font-medium">Population</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <strong>652230</strong>
                            <span className="text-gray-300 font-medium">Area</span>
                        </div>
                    </div>
                </Panel>
                    
                <Panel className="w-full md:w-3/5">
                    <h2 className="text-gray-700 font-medium">Details</h2>

                    <div className="divide-y divide-light-blue-400">
                        <CountryRow 
                            label="Capital" 
                            content="Brasília"
                        />
                        <CountryRow 
                            label="Languages" 
                            content="Portuguese"
                        />
                        <CountryRow 
                            label="Currencies" 
                            content="Brazilian real"
                        />
                        <CountryRow 
                            label="Native name" 
                            content="Brasil"
                        />
                        <CountryRow 
                            label="Gini" 
                            content="54.7%"
                        />

                        <div className="py-5">
                            <span className="font-medium text-gray-300">Neighbouring Countries</span>

                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                                <div>
                                    <a href="#">
                                        <img 
                                            className="rounded-sm"
                                            src="https://restcountries.eu/data/usa.svg" 
                                            alt="USA Flag"
                                        />
                                        <h3 
                                            className="mt-2 text-gray-700 text-center font-semibold"
                                        >
                                            Argentina
                                        </h3>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img 
                                            className="rounded-sm"
                                            src="https://restcountries.eu/data/usa.svg" 
                                            alt="USA Flag"
                                        />
                                        <h3 
                                            className="mt-2 text-gray-700 text-center font-semibold"
                                        >
                                            Argentina
                                        </h3>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img 
                                            className="rounded-sm"
                                            src="https://restcountries.eu/data/usa.svg" 
                                            alt="USA Flag"
                                        />
                                        <h3 
                                            className="mt-2 text-gray-700 text-center font-semibold"
                                        >
                                            Argentina
                                        </h3>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img 
                                            className="rounded-sm"
                                            src="https://restcountries.eu/data/usa.svg" 
                                            alt="USA Flag"
                                        />
                                        <h3 
                                            className="mt-2 text-gray-700 text-center font-semibold"
                                        >
                                            Argentina
                                        </h3>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img 
                                            className="rounded-sm"
                                            src="https://restcountries.eu/data/usa.svg" 
                                            alt="USA Flag"
                                        />
                                        <h3 
                                            className="mt-2 text-gray-700 text-center font-semibold"
                                        >
                                            Argentina
                                        </h3>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img 
                                            className="rounded-sm"
                                            src="https://restcountries.eu/data/usa.svg" 
                                            alt="USA Flag"
                                        />
                                        <h3 
                                            className="mt-2 text-gray-700 text-center font-semibold"
                                        >
                                            Argentina
                                        </h3>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img 
                                            className="rounded-sm"
                                            src="https://restcountries.eu/data/usa.svg" 
                                            alt="USA Flag"
                                        />
                                        <h3 
                                            className="mt-2 text-gray-700 text-center font-semibold"
                                        >
                                            Argentina
                                        </h3>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img 
                                            className="rounded-sm"
                                            src="https://restcountries.eu/data/usa.svg" 
                                            alt="USA Flag"
                                        />
                                        <h3 
                                            className="mt-2 text-gray-700 text-center font-semibold"
                                        >
                                            Argentina
                                        </h3>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <img 
                                            className="rounded-sm"
                                            src="https://restcountries.eu/data/usa.svg" 
                                            alt="USA Flag"
                                        />
                                        <h3 
                                            className="mt-2 text-gray-700 text-center font-semibold"
                                        >
                                            Argentina
                                        </h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Panel>
            </main>
            <Footer />
        </MainCointainer>
    )
}

export default single
