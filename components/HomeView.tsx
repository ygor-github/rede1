import React from 'react';
import Hero from './Hero';
import Services from './Services';
import SolutionsView from './SolutionsView';
import Expertise from './Expertise';
import Pricing from './Pricing';
import TechStack from './TechStack';
import FAQ from './FAQ';
import { TranslationSchema } from '../types';

interface HomeViewProps {
  onContactClick: () => void;
  t: TranslationSchema;
}

const HomeView: React.FC<HomeViewProps> = ({ onContactClick, t }) => {
  return (
    <>
      <Hero onContactClick={onContactClick} t={t} />
      <Services t={t} />
      <SolutionsView onContactClick={onContactClick} t={t} isSection={true} />
      <Expertise t={t} />
      <Pricing onContactClick={onContactClick} t={t} />
      <TechStack />
      <FAQ t={t} />
    </>
  );
};

export default HomeView;
