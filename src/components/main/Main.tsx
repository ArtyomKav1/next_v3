'use client';

import dotsBackground from '../../../public/main_pic_2.svg';
import Image from 'next/image';
import { CallbackForm } from './CallBackForm/CallbackForm';
import Radion from './radio/Radion';
import dotsBackgroundTop from '@/public/main_pic.svg';
import HowBecomePartner from './HowBecomePartner';
import ProductSelection from './ProductSelection';
import EarningsCompany from './EarningsCompany';
import PartnerCompanies from './PartnerCompanies';
import AboutCompany from './AboutCompany';
import AgencyNetwork from './AgencyТetwork';

import main_black from '../../../public/main_dots_black.svg';
export default function Main() {
  return (
    <div className="relative mx-auto flex h-full flex-col justify-center bg-[#F8F5FF]">
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
      <Image
        src={main_black}
        alt="main_black"
        className="pointer-events-none absolute left-0 top-[2800px] z-20 h-auto w-auto max-w-none shrink-0 opacity-20 max-xl:hidden"
      />
      <PartnerCompanies />
      <EarningsCompany />
      <ProductSelection />
      <HowBecomePartner />
      <Radion />
      <CallbackForm />
    </div>
  );
}
