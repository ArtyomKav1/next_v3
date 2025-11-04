import Image from 'next/image';
import info_CaseLook from '@/public/info_CaseLook.svg';

export default function VerificationService() {
  return (
    <section className="bg-[#fff5e2] py-[60px] max-lg:py-[30px] max-md:px-[20px] max-sm:py-[30px]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-[30px] max-lg:flex-col">
        <div className="flex w-[604px] flex-col gap-[56px] max-lg:w-full max-lg:items-center max-lg:text-center max-sm:gap-[26px]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[40px] font-bold leading-[120%] tracking-tight text-[#2E2E2E] max-sm:text-[30px]">
              Сервис для поиска и анализа судебной практики
            </h1>
            <h2 className="text-[20px] text-[#2E2E2E]">
              Помогает юристам создать эффективную стратегию, повышая шансы на победу в судебном
              споре.
            </h2>
          </div>
          <a href="/#CallbackForm">
            <button className="w-[291px] rounded-[16px] bg-[#FFBE23] px-[32px] py-[20px] font-bold text-[#2E2E2E] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 max-sm:w-full">
              Стать партнером
            </button>
          </a>
        </div>
        <div className="h-[347px] w-[576px] max-sm:h-[247px] max-sm:w-[376px]">
          <Image src={info_CaseLook} alt="info_CaseLook" />
        </div>
      </div>
    </section>
  );
}
