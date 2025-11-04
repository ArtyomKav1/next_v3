export default function ReferralSystem() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-lg:py-[30px] max-md:px-[20px]">
      <div className="flex flex-col gap-[56px] max-lg:gap-[30px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[40px] font-semibold tracking-tight text-[#2E2E2E] max-lg:text-center max-lg:text-[30px]">
            Почему предлагать Caselook — <span className="text-[#F7A600]">выгодно</span>
          </h1>
          <h2 className="text-[20px] text-[#2E2E2E] max-lg:text-center">
            Комиссия партнера — 50% стоимости лицензии.
          </h2>
        </div>

        <div className="flex justify-between rounded-[16px] bg-[#FFF5E2] px-[32px] py-[44px] max-lg:gap-[10px] max-lg:flex-col max-lg:items-center max-lg:py-[14px] max-sm:px-[12px]">
          <div className="flex items-center gap-[12px]">
            <p className="text-[20px] text-[#2E2E2E] max-sm:text-[12px]">
              Вознаграждение за одну продажу:
            </p>
            <p className="text-[27px] font-bold text-[#FFBE23] max-sm:text-[16px]">30 000 ₽</p>
          </div>
          <a href="/#CallbackForm" className="w-[362px] max-lg:w-full">
            <button className="h-[59px]  w-full rounded-[16px] bg-[#FFBE23] px-[32px] py-[20px] text-[15px] font-bold text-[#2E2E2E] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 ">
              Стать партнером
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
