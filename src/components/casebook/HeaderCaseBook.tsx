'use client';

import { redirect } from 'next/navigation';
import Image from 'next/image';
import logo from '../../..//public/logo_violet.svg';
import info from '../../../public/Info.svg';

export default function HeaderCaseBook() {
  return (
    <div className="h-[805px] bg-[#daebff]">
      <div className="mx-auto flex h-full max-w-[1224px] flex-col gap-[140px]">
        <div className="flex h-[96px] w-full items-center justify-between">
          <div className="flex gap-[64px]">
            <div onClick={() => redirect('/')} className="cursor-pointer">
              <Image src={logo} alt="" />
            </div>
            <div className="flex gap-[28px]">
              <div
                onClick={() => redirect('/casebook')}
                className="cursor-pointer text-[15px] font-semibold text-[#2988FF]"
              >
                Casebook
              </div>
              <div
                onClick={() => redirect('/caselook')}
                className="cursor-pointer text-[15px] font-semibold text-[#2E2E2E]"
              >
                Caselook
              </div>
            </div>
          </div>
          <div>
            <button className="h-[48px] rounded-[16px] bg-[#2988FF] px-[20px] pb-[1px] font-bold text-[#FFFFFF]">
              Стать партнером
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex w-[604px] flex-col gap-[56px]">
            <div className="flex flex-col gap-[24px]">
              <div className="text-[40px] font-bold leading-[120%] tracking-tight text-[#2E2E2E]">
                Cервис для проверки контрагентов и мониторинга судебных дел
              </div>
              <div className="text-[20px] text-[#2E2E2E]">
                Помогает специалистам контролировать бизнес-партнеров и вести судебную работу в
                одной системе.
              </div>
            </div>
            <button className="w-[291px] rounded-[16px] bg-[#2988FF] px-[32px] py-[20px]">
              Стать партнером
            </button>
          </div>
          <div className="h-[347px] w-[576px]">
            <Image src={info} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
