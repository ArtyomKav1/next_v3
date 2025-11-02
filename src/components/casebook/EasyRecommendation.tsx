export default function EasyRecommendation() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-sm:px-[16px]">
      <div className="flex flex-col gap-[56px] max-sm:gap-[30px]">
        <h1 className="text-[40px] font-semibold tracking-tight text-[#2E2E2E] max-lg:text-center max-lg:text-[30px] max-sm:text-[25px]">
          Почему рекомендовать Casebook — <span className="text-[#2988FF]">легко</span>
        </h1>

        <div className="flex gap-[20px] max-lg:flex-col">
          <div className="circle-schadow flex flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
            <h2 className="text-[24px] font-semibold leading-[120%] text-[#2E2E2E]">
              Сервис для всех вертикалей бизнеса
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Работать с процедурой банкротства в одной системе и быть в курсе событий по делу.
            </p>
          </div>

          <div className="circle-schadow flex flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] leading-[120%]">
            <h2 className="text-[24px] font-semibold leading-[120%] text-[#2E2E2E]">
              Актуальность и полнота данных
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Сервис содержит сведения из 35+ источников — информация обновляется в режиме реального
              времени.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-[20px]">
            <div className="circle-schadow flex h-full flex-col justify-between gap-[10px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
              <h2 className="text-[24px] font-semibold leading-[120%] text-[#2E2E2E]">
                Быстрый старт в системе и клиентская поддержка
              </h2>
              <p className="text-[15px] text-[#2E2E2E]">
                Клиенту не нужно самостоятельно знакомиться с продуктом — мы обучаем возможностям
                системы и быстро отвечаем на вопросы.
              </p>
            </div>
            <a href="/#CallbackForm">
              <button className="w-full rounded-[16px] bg-[#2988FF] px-[32px] py-[20px] text-[15px] font-bold text-[#FFFFFF] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80">
                Стать партнером
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
