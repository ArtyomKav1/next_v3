import Image from 'next/image';
import { useRef } from 'react';

import rightArrow from '@/public/arrow_for_bank_right.svg';
import leftArrow from '@/public/arrow_for_bank_left.svg';
import { partnerCompanies } from './mian.constants';

export default function PartnerCompanies() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="mx-auto max-w-[1140px] px-[16px] sm:px-[30px]">
      <div className="flex flex-col gap-[56px] pt-[170px] max-md:pt-[70px]">
        <h1 className="text-center text-[40px] font-semibold text-[#1A0D4D] max-md:text-[28px]">
          Наши решения уже оценили <span className="text-[#5837D0]">крупнейшие компании</span>
        </h1>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 hover:opacity-70"
            onClick={() => scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
          >
            <Image src={leftArrow} alt="leftArrow" />
          </button>

          <div
            ref={scrollContainerRef}
            className="mx-auto blue flex h-[72px] w-full max-w-[100%] items-center gap-[64px] overflow-x-auto px-[48px] max-md:gap-[24px] max-md:px-[32px]"
          >
            {partnerCompanies.map((company, index) => (
              <Image
                key={index}
                src={company.src}
                alt={company.alt}
                className="h-[54px] w-auto shrink-0 object-contain"
              />
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2 hover:opacity-70"
            onClick={() => scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
          >
            <Image src={rightArrow} alt="rightArrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
