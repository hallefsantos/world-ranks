import Head from 'next/head';
import { useState } from 'react';

import MainCointainer from '../components/MainCointainer';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import Footer from '../components/Footer';
import CountriesTable from '../components/CountriesTable';

const Home = ({ countries }) => {
  const [keyword, setKeyword] = useState('');

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
    );
  });

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <MainCointainer>
      <Head>
        <title>Homepage | World Ranks</title>
      </Head>
      <Header />

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="mb-4 lg:mb-0 text-gray-400 dark:text-gray-200">
          Found {filteredCountries.length} countries
        </div>

        <SearchInput className="lg:max-w-2xl" onChange={onInputChange} />
      </div>

      <CountriesTable countries={filteredCountries} />

      <Footer />
    </MainCointainer>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
}
