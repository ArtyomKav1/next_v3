import Image from 'next/image';
import info from '@/public/Info.svg';

export default function VerificationService() {
  return (
    <section className="bg-[#daebff] py-[60px] max-lg:py-[30px] max-sm:px-[16px]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-[30px] max-lg:flex-col">
        <div className="flex w-[604px] flex-col gap-[56px] max-lg:w-full max-lg:items-center max-lg:text-center max-sm:gap-[26px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[40px] font-bold leading-[120%] tracking-tight text-[#2E2E2E] max-sm:text-[25px]">
              Cервис для проверки контрагентов и мониторинга судебных дел
            </h1>
            <h2 className="text-[20px] text-[#2E2E2E]">
              Помогает специалистам контролировать бизнес-партнеров и вести судебную работу в одной
              системе.
            </h2>
          </div>
          <a href="/#CallbackForm">
            <button className="w-[291px] rounded-[16px] bg-[#2988FF] px-[32px] py-[20px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 max-sm:w-full">
              Стать партнером
            </button>
          </a>
        </div>
        <div className="h-[347px] w-[576px] max-sm:h-[247px] max-sm:w-[376px] max-sm:pt-2">
          <Image src={info} alt="info_CaseLook" />
        </div>
      </div>
    </section>
  );
}
