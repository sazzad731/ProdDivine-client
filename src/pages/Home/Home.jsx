import React, { Suspense } from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import EasySteps from '../../components/EasySteps/EasySteps';
import JoinProdDivine from '../../components/JoinProdDivine/JoinProdDivine';
import RecentQueries from '../../components/RecentQueries/RecentQueries';
import Spinner from "../../components/Spinner/Spinner"
import useApi from '../../hooks/useApi';

const Home = () => {
  const { recentQueryPromise } = useApi();
  return (
    <>
      <HeroSlider />
      <Suspense fallback={<Spinner/>}>
        <RecentQueries recentQueryPromise={recentQueryPromise()} />
      </Suspense>
      <EasySteps />
     <JoinProdDivine/>
    </>
  );
};

export default Home;