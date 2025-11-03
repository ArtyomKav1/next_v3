'use client';

import { radioQuestions } from '../mian.constants';
import { RadioItem } from './RadioItem';

export default function Radion() {
  return (
    <section className="mx-auto max-w-[1140px] px-[16px] max-sm:px-[16px] sm:px-[30px]">
      <div className="flex flex-col gap-[32px] pt-[30px] text-[#1A0D4D] sm:gap-[56px]">
        <div className="text-[28px] font-semibold text-[#1A0D4D] sm:text-[40px]">
          Частые вопросы:
        </div>
        <div className="flex flex-col gap-[12px] sm:gap-[16px]">
          {radioQuestions.map((item, index) => {
            return <RadioItem key={index} title={item.question} text={item.answer} />;
          })}
        </div>
      </div>
    </section>
  );
}
