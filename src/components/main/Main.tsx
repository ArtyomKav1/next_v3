'use client';

import dotsBackground from '../../../public/main_pic_2.svg';
import Image from 'next/image';
import { CallbackForm } from './CallbackForm';
import Radion from './Radion';
import dotsBackgroundTop from '@/public/main_pic.svg';
import HowBecomePartner from './HowBecomePartner';
import ProductSelection from './ProductSelection';
import EarningsCompany from './EarningsCompany';
import PartnerCompanies from './PartnerCompanies';
import AboutCompany from './AboutCompany';
import AgencyNetwork from './AgencyТetwork';

export default function Main() {
  return (
    <div className="relative mx-auto flex h-full flex-col justify-center bg-[#F8F5FF] pb-[100px]">
      <AgencyNetwork />
      <Image
        src={dotsBackground}
        alt="dotsBackground"
        className="pointer-events-none absolute left-0 top-[600px] z-20 h-auto w-auto max-w-none shrink-0 opacity-20"
        priority
      />

      <Image
        src={dotsBackgroundTop}
        alt="dotsBackgroundTop"
        className="pointer-events-none absolute right-0 top-[-120px] z-20 h-auto w-auto max-w-none shrink-0 opacity-20"
      />

      <AboutCompany />

      <PartnerCompanies />
      {/* <EarningsCompany /> */}
      {/* <ProductSelection /> */}
      {/* <HowBecomePartner /> */}
      <Radion />
      {/* <CallbackForm /> */}
    </div>
  );
}
