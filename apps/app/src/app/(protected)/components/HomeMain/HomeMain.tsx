import { Stats } from './stats/Stats';
import { ReferralAd } from './referralAd/ReferralAd';

export const HomeMain = () => {
  return (
    <div className='flex-1 flex flex-col gap-8 p-5'>
      <Stats />
      <ReferralAd />
    </div>
  );
};
