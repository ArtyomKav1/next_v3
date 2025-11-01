'use client';
import { redirect } from 'next/navigation';
import logo from '@/public/logo.svg';
import Image from 'next/image';

import { useState } from 'react';

export default function Header() {
  const [isPopapModal, setPopapModal] = useState<boolean>();
  return (
    <div className="w-full bg-[#5837D0]">
      <div className="mx-auto flex max-w-[1140px] flex-col px-[30px]">
        <div className="flex h-[96px] w-full items-center justify-between">
          <div className="flex gap-[64px]">
            <div onClick={() => redirect('/')} className="shrink-0 cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
            <div className="flex gap-[28px] max-md:hidden">
              <div
                onClick={() => redirect('/casebook')}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
              >
                Casebook
              </div>
              <div
                onClick={() => redirect('/caselook')}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
              >
                Caselook
              </div>
            </div>
          </div>
          <a href="#CallbackForm" className="max-md:hidden">
            <button className="h-[48px] rounded-[16px] bg-[#EEFF2D] px-[20px] pb-[1px] font-bold text-[#1A0D4D] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80">
              Стать партнером
            </button>
          </a>

          <button
            className="relative mr-[20px] h-[40px] w-[40px] rounded-[10px] bg-white/30 md:hidden [&>*]:absolute [&>*]:block [&>*]:h-[3px] [&>*]:w-[20px] [&>*]:rounded-[6px] [&>*]:bg-[#1A0D4D] [&>*]:transition-all"
            onClick={() => setPopapModal(!isPopapModal)}
          >
            <span
              className={`duration-400 right-[10px] top-[12px] ease-in-out ${isPopapModal && 'top-[20px] rotate-[45deg]'}`}
            ></span>
            <span className={`right-[10px] ease-in-out ${isPopapModal && 'opacity-0'}`}></span>
            <span
              className={`duration-400 ', bottom-[10px] right-[10px] ease-in-out ${isPopapModal && 'top-[20px] rotate-[-45deg]'}`}
            ></span>
          </button>

          <div
            className={`absolute left-[5%] top-[80px] w-[90%] z-20 rounded-2xl bg-white transition-all duration-300 md:hidden ${isPopapModal ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              onClick={() => redirect('/casebook')}
              className="cursor-pointer px-[20px] py-[10px] text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
            >
              Casebook
            </div>
            <div
              onClick={() => redirect('/caselook')}
              className="cursor-pointer px-[20px] py-[10px] text-black transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
            >
              Caselook
            </div>
          </div>
        </div>

        {/* <div className="h-[472px] py-[88px] max-md:py-[32px]">
          <div className="flex max-w-[640px] flex-col gap-[44px] max-md:gap-[20px]">
            <div className="flex flex-col gap-[24px]">
              <div className="text-[50px] font-bold leading-[120%] max-md:text-[30px]">
                Агентская сеть от крупной IT-компании
              </div>
              <div className="text-[#FFFFFF]/80">
                Рекомендуйте юридические продукты и зарабатывайте от 180 000 рублей ежемесячно.
              </div>
            </div>
            <div>
              <a href="#CallbackForm">
                <button className="h-[58px] w-[291px] rounded-[16px] bg-[#EEFF2D] px-[32px] py-[18px] font-bold text-[#1A0D4D] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80">
                  Стать партнером
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[20px] max-md:flex-col max-md:gap-[10px]">
          <div className="flex flex-1 items-center gap-[20px] max-md:gap-[10px]">
            <div className="flex h-[140px] flex-1 flex-col items-center justify-center gap-[0px] rounded-[16px] bg-[#EDE7FF] px-[12px] py-[44px] transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-[32px] font-bold text-[#5837D0] max-lg:text-[24px] max-md:text-[18px]">
                от 30 000 ₽
              </div>
              <div className="text-center text-[15px] text-[#1A0D4D]">
                за продажу одной лицензии
              </div>
            </div>

            <div className="flex h-[140px] flex-1 flex-col items-center justify-center gap-[0px] rounded-[16px] bg-[#EDE7FF] px-[12px] py-[44px] transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-[32px] font-bold text-[#5837D0] max-lg:text-[24px] max-md:text-[18px]">
                3 дня
              </div>
              <div className="text-center text-[15px] text-[#1A0D4D]">на получение гонорара</div>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-[20px] max-md:gap-[10px]">
            <div className="flex h-[180px] flex-1 flex-col items-center justify-center gap-[12px] rounded-[16px] bg-[#1A0D4D] px-[12px] py-[44px] transition-all duration-300 hover:-translate-y-0.5 max-lg:gap-[0px]">
              <div className="text-[32px] font-bold text-[#FFFFFF] max-lg:text-[24px] max-md:text-[18px]">
                180 000 ₽
              </div>
              <div className="max-w-[208px] text-center text-[15px] text-[#FFFFFF]">
                средний заработок партнеров в месяц
              </div>
            </div>
            <div className="flex h-[180px] flex-1 flex-col items-center justify-center gap-[12px] rounded-[16px] bg-[#1A0D4D] px-[12px] py-[44px] transition-all duration-300 hover:-translate-y-0.5 max-lg:gap-[0px]">
              <div className="text-[32px] font-bold text-[#FFFFFF] max-lg:text-[24px] max-md:text-[18px]">
                390 000 ₽
              </div>
              <div className="max-w-[208px] text-center text-[15px] text-[#FFFFFF]">
                максимальный заработок нашего партнера
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
