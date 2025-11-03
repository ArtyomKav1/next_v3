export default function CasebookRates() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-sm:px-[16px]">
      <div className="flex flex-col gap-[56px] max-sm:gap-[30px]">
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[40px] font-semibold text-[#2E2E2E] max-lg:text-center max-lg:text-[30px] max-sm:text-[25px]">
            <span className="text-[#2988FF]">Тарифы</span> Casebook
          </h1>
          <h2 className="text-[20px] text-[#2E2E2E]">
            Выбирайте тариф под требования конкретного клиента — рекомендуйте то, что нужно именно
            ему.
          </h2>
        </div>

        <div className="flex h-[339px] gap-[20px] max-lg:h-full max-lg:flex-col">
          <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#DBEBFF] px-[32px] py-[44px] max-sm:px-[16px] max-sm:py-[22px]">
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[27px] font-semibold text-[#2E2E2E] max-lg:text-center">
                Casebook <span className="text-[#2988FF]">Standard</span>
              </h2>
              <p className="text-[15px] text-[#2E2E2E]">
                Для мониторинга судебных дел и проверки контрагентов — юридических и физических лиц
              </p>
            </div>
            <div className="flex max-xl:flex-col max-sm:gap-[10px] xl:gap-[20px]">
              <div className="flex gap-[6px] max-xl:items-center xl:flex-col">
                <p className="text-[15px] text-[#2E2E2E] max-sm:text-[13px]">
                  Вознаграждение за одну продажу:
                </p>
                <p className="text-[27px] font-bold text-[#2988FF] max-sm:text-[18px]">30 000 ₽</p>
              </div>
              <a href="/#CallbackForm" className="w-[291px] flex-1 max-lg:w-full">
                <button className="rounded-[16px] bg-[#2988FF] px-[32px] py-[20px] text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 max-lg:w-full">
                  Стать партнером
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#C2DDFF] px-[32px] py-[44px] max-sm:px-[16px] max-sm:py-[22px]">
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[27px] font-semibold text-[#2E2E2E] max-lg:text-center">
                Casebook <span className="text-[#2988FF]">Pro</span>
              </h2>
              <p className="text-[15px] text-[#2E2E2E]">
                Для подачи документов в арбитражные суды онлайн и ознакомления с материалами дел +
                все возможности тарифа Standard
              </p>
            </div>
            <div className="flex max-xl:flex-col max-sm:gap-[10px] xl:gap-[20px]">
              <div className="flex gap-[6px] max-xl:items-center xl:flex-col">
                <p className="text-[15px] text-[#2E2E2E] max-sm:text-[13px]">
                  Вознаграждение за одну продажу:
                </p>
                <p className="text-[27px] font-bold text-[#2988FF] max-sm:text-[18px]">42 000 ₽</p>
              </div>
              <a href="/#CallbackForm" className="w-[291px] flex-1 max-lg:w-full">
                <button className="rounded-[16px] bg-[#005BCC] px-[32px] py-[20px] text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 max-lg:w-full">
                  Стать партнером
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
