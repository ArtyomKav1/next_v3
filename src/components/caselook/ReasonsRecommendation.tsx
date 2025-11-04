export default function ReasonsRecommendation() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-md:px-[20px] max-sm:py-[30px]">
      <div className="flex flex-col gap-[56px] max-sm:gap-[30px]">
        <h1 className="text-[40px] font-semibold tracking-tight text-[#2E2E2E] max-lg:text-center max-lg:text-[30px] max-sm:text-[25px]">
          Почему рекомендовать Caselook — <span className="text-[#F7A600]">легко</span>
        </h1>

        <div className="flex gap-[20px] max-lg:flex-col">
          <div className="circle-schadow flex flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
            <h2 className="text-[24px] font-semibold leading-[120%] text-[#2E2E2E]">
              Сервис для всех юридических специальностей
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Юристы, адвокаты, арбитражные управляющие и госслужащие — продукт полезен всем, кто
              работает в различных отраслях права.
            </p>
          </div>

          <div className="circle-schadow flex flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] leading-[120%]">
            <h2 className="text-[24px] font-semibold leading-[120%] text-[#2E2E2E]">
              Один продукт на все юридические задачи
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              С сервисом юрист решит все рабочие задачи — от формирования правовой позиции по делу
              до создания качественного текста договора.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-[20px]">
            <div className="circle-schadow flex h-full flex-col justify-between gap-[10px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
              <h2 className="text-[24px] font-semibold leading-[120%] text-[#2E2E2E]">
                Быстрый старт в системе и клиентская поддержка
              </h2>
              <p className="text-[15px] text-[#2E2E2E]">
                Юристу не нужно самостоятельно знакомиться с продуктом — мы обучаем возможностям
                системы и быстро отвечаем на вопросы пользователей.
              </p>
            </div>
            <a href="/#CallbackForm">
              <button className="w-full rounded-[16px] bg-[#FFBE23] px-[32px] py-[20px] text-[15px] font-bold text-[#2E2E2E] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80">
                Стать партнером
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
