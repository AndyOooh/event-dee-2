import { HeroRight } from './HeroRight';
import { HeroLeft } from './HeroLeft';
import { container } from '../../../styles/styles';

export const Hero = () => {
  return (
    <section className={`flex-center main-height ${container}`}>
      <div className='w-full flex-center flex-col lg:flex-row gap-12 lg:gap-8'>
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};
