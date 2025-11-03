import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Arrow from '@/public/Radion_Arrow.svg';

export const RadioItem = (props: { title: string; text: string }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (open && contentRef.current) {
      const Height = contentRef.current.scrollHeight + 10;
      setMaxHeight(`${Height}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [open]);

  return (
    <div
      className={`relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-[#EDE7FF] px-8 py-7 transition-all duration-300 ease-in-out max-sm:p-4`}
      onClick={() => setOpen(!open)}
    >
      <div className="z-20 flex items-center justify-between">
        <h2 className="pr-[10px] text-[18px] font-semibold max-sm:text-[12px]">{props.title}</h2>
        <div className={`shrink-0 transform duration-300 ${open ? 'rotate-180' : 'rotate-0'} `}>
          <Image src={Arrow} alt="Arrow" className="h-[20px] w-[20px] sm:h-auto sm:w-auto" />
        </div>
      </div>

      <p
        ref={contentRef}
        className={`transition-max-height overflow-hidden text-[16px] text-gray-700 transition-all duration-500 ease-in-out max-sm:text-[12px] ${open ? 'pt-2.5' : 'pt-0'}`}
        style={{ maxHeight }}
      >
        {props.text}
      </p>
    </div>
  );
};
