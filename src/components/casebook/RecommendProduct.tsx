export default function RecommendProduct() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-sm:px-[16px]">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-[56px] max-lg:gap-[30px] max-sm:gap-[15px]">
        <h1 className="text-[40px] font-semibold tracking-tight text-[#2E2E2E] max-lg:text-center max-lg:text-[30px] max-sm:text-[25px]">
          Рекомендуйте продукт, опираясь на <span className="text-[#2988FF]">цифры</span>
        </h1>
        <div className="flex h-[314px] gap-[20px] max-lg:h-full max-lg:flex-col">
          <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#D6E8FF] px-[22px] py-[32px]">
            <h2 className="flex flex-col gap-[8px]">
              <div className="text-[44px] font-semibold leading-10 text-[#2E2E2E]">28+</div>
              <div className="text-[24px] font-semibold leading-7 text-[#2E2E2E]">
                млн компаний в базе
              </div>
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Легко проявить должную осмотрительность в один клик.
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#D6E8FF] px-[22px] py-[32px]">
            <h2 className="flex flex-col gap-[8px]">
              <div className="text-[44px] font-semibold leading-10 text-[#2E2E2E]">35+</div>
              <div className="text-[24px] font-semibold leading-7 text-[#2E2E2E]">
                факторов риска по компаниям
              </div>
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Все негативные факторы по организации — на дашбордах.
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#D6E8FF] px-[22px] py-[32px]">
            <h2 className="flex flex-col gap-[8px]">
              <div className="text-[44px] font-semibold leading-10 text-[#2E2E2E]">100% </div>
              <div className="text-[24px] font-semibold leading-7 text-[#2E2E2E]">
                данных по делам и организациям
              </div>
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Сервис уведомит пользователя о новых событиях по email.
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#D6E8FF] px-[22px] py-[32px]">
            <h2 className="flex flex-col gap-[8px]">
              <div className="text-[44px] font-semibold leading-10 text-[#2E2E2E]">225+</div>
              <div className="text-[24px] font-semibold leading-7 text-[#2E2E2E]">
                млн судебных дел в системе
              </div>
            </h2>
            <p className="text-[15px] text-[#2E2E2E]">
              Пользователь найдет всю информацию по делу в одном окне.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
