export default function ServiceSales() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-sm:px-[16px]">
      <div className="flex max-lg:flex-col max-lg:gap-[20px]">
        <div className="flex grow-[1] flex-col gap-[56px] max-lg:items-center max-lg:gap-[30px]">
          <h1 className="text-[40px] font-semibold text-[#2E2E2E] max-lg:text-center max-lg:text-[30px] max-sm:text-[25px]">
            Продажа <span className="text-[#F7A600]">без усилий</span>— возможности сервиса говорят
            за себя
          </h1>
          <a href="/#CallbackForm">
            <button className="w-[291px] rounded-[16px] bg-[#FFBE23] px-[32px] py-[20px] text-[15px] font-semibold text-[#2E2E2E] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 max-sm:w-full">
              Стать партнером
            </button>
          </a>
        </div>
        <div className="flex grow-[1] flex-col gap-[20px]">
          <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] max-sm:py-[22px]">
            <h2 className="text-[27px] font-semibold text-[#2E2E2E]">
              <span className="text-[56px]">21</span> поисковый фильтр
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Параметры поиска помогут быстро создать нужный запрос и подобрать только релевантную
              судебную практику..
            </p>
          </div>
          <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] max-sm:py-[22px]">
            <h2 className="text-[27px] font-semibold text-[#2E2E2E]">
              <span className="text-[56px]">24/7</span> AI готовит тексты документов{' '}
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Онлайн-помощник напишет документ целиком, составит тезисный план документа или поможет
              подготовиться к переговорам.
            </p>
          </div>

          <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] max-sm:py-[22px]">
            <h2 className="text-[27px] font-semibold text-[#2E2E2E]">
              <span className="text-[56px]">115+</span> млн документов
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Сервис содержит крупнейшую базу судебных актов — юрист легко найдет любой документ: от
              решений первой инстанции до особого мнения судьи.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
