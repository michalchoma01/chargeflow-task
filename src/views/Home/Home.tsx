import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import ChartSection from '../../components/ChartSection/ChartSection';
import style from './Home.module.css';
import ChartGrid from '../../components/ChartGrid/ChartGrid';

const Home: React.FC = () => {
  return (
    <div className={style.home}>
      <Searchbar />
      <HeaderSection title="Today" />
      <ChartSection />
      <HeaderSection title="Reports overview" withFilters />
      <ChartGrid />
    </div>
  );
};

export default Home;
