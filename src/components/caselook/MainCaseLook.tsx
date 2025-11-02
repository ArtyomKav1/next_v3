'use client';

import VerificationService from './VerificationService';
import ServiceSales from './ServiceSales';
import ReasonsRecommendation from './ReasonsRecommendation';
import ServiceHelps from './ServiceHelps';
import ReferralSystem from './ReferralSystem';

export default function MainCaseLook() {
  return (
    <div className="h-full w-full bg-[#FFFCF5]">
      <VerificationService />
      <ServiceSales />
      <ReasonsRecommendation />
      <ServiceHelps />
      <ReferralSystem />
    </div>
  );
}
