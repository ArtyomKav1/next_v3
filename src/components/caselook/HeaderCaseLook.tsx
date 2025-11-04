'use client';

import { redirect } from 'next/navigation';
import Image from 'next/image';
import logo from '@/public/logo_violet.svg';
import { useState } from 'react';


export default function HeaderCaseLook() {
  const [isPopapModal, setPopapModal] = useState<boolean>();
  return (
    <div className="w-full bg-[#fff5e2]">
      <div className="mx-auto flex max-w-[1140px] flex-col px-[30px] max-md:px-[20px]">
        <div className="flex h-[96px] w-full items-center justify-between">
          <div className="flex gap-[64px]">
            <div onClick={() => redirect('/')} className="shrink-0 cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
            <div className="flex gap-[28px] font-medium text-[#1A0D4D] max-md:hidden">
              <div
                onClick={() => redirect('/casebook')}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
              >
                Casebook
              </div>
              <div
                onClick={() => redirect('/caselook')}
                className="cursor-pointer text-[#FFBE23] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
              >
                Caselook
              </div>
            </div>
          </div>
          <a href="/#CallbackForm" className="max-md:hidden">
            <button className="h-[48px] rounded-[16px] bg-[#FFBE23] px-[20px] pb-[1px] font-bold text-[#2E2E2E] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80">
              Стать партнером
            </button>
          </a>

          <button
            className="relative z-40 mr-[20px] h-[40px] w-[40px] rounded-[10px] bg-white md:hidden [&>*]:absolute [&>*]:block [&>*]:h-[3px] [&>*]:w-[20px] [&>*]:rounded-[6px] [&>*]:bg-[#1A0D4D] [&>*]:transition-all"
            onClick={() => setPopapModal(!isPopapModal)}
          >
            <span
              className={`duration-400 right-[10px] ease-in-out ${isPopapModal ? 'top-[19px] rotate-[45deg]' : 'top-[12px]'}`}
            ></span>
            <span
              className={`right-[10px] top-[19px] ease-in-out ${isPopapModal && 'opacity-0'}`}
            ></span>
            <span
              className={`duration-400 ', right-[10px] ease-in-out ${isPopapModal ? 'top-[19px] rotate-[-45deg]' : 'top-[26px]'}`}
            ></span>
          </button>

          <div
            className={`absolute left-[5%] top-[80px] z-20 w-[90%] rounded-2xl bg-white transition-all duration-300 md:hidden ${isPopapModal ? 'opacity-100' : 'opacity-0'}`}
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
      </div>
    </div>
  );
}
