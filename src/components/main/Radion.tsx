'use client';
import Image from 'next/image';
import Arrow from '@/public/Radion_Arrow.svg';
import { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { radioQuestions } from './mian.constants';

export default function Radion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<{ question: number; content: number }[]>([]);

  const calculateHeights = () => {
    const newHeights = radioQuestions.map((_, index) => ({
      question: questionRefs.current[index]?.scrollHeight || 0,
      content: contentRefs.current[index]?.scrollHeight || 0,
    }));
    setHeights(newHeights);
  };

  useEffect(() => {

    calculateHeights();


    const handleResize = () => {
      calculateHeights();
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="mx-auto max-w-[1140px] px-[16px] max-sm:px-[16px] sm:px-[30px]">
      <div className="flex flex-col gap-[32px] pt-[30px] text-[#1A0D4D] sm:gap-[56px]">
        <div className="text-[28px] font-semibold text-[#1A0D4D] sm:text-[40px]">
          Частые вопросы:
        </div>
        <div className="flex flex-col gap-[12px] sm:gap-[16px]">
          {radioQuestions.map((item, index) => {
            const isActive = activeIndex === index;
            const questionHeight = heights[index]?.question || 0;
            const contentHeight = heights[index]?.content || 0;

            return (
              <div
                key={index}
                className={cn(
                  'relative flex cursor-pointer flex-col gap-[12px] overflow-hidden rounded-[12px] bg-[#EDE7FF] px-[20px] py-[28px] transition-all duration-500 ease-in-out sm:rounded-[16px] sm:px-[28px]'
                )}
                style={{
                  maxHeight: isActive
                    ? `${questionHeight + contentHeight + 68}px`
                    : `${questionHeight + 56}px`,
                }}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className="z-20 flex items-center justify-between gap-[12px]">
                  <div
                    ref={(el) => {
                      questionRefs.current[index] = el;
                    }}
                    className="text-[16px] font-semibold leading-tight sm:text-[18px]"
                  >
                    {item.question}
                  </div>
                  <div
                    className={cn('flex-shrink-0 transition-transform duration-300', {
                      'rotate-0': !isActive,
                      'rotate-180': isActive,
                    })}
                  >
                    <Image
                      src={Arrow}
                      alt="Arrow"
                      className="h-[20px] w-[20px] sm:h-auto sm:w-auto"
                    />
                  </div>
                </div>

                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className={cn('transition-opacity duration-300', {
                    'pointer-events-none opacity-0': !isActive,
                    'opacity-100': isActive,
                  })}
                >
                  <div className="text-[14px] leading-relaxed sm:text-[16px]">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
