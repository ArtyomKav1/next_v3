import { cards } from './casebook.constant';

export default function CasebookHelps() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-sm:px-[20px] max-sm:py-[30px]">
      <div className="grid grid-cols-2 gap-[40px] max-lg:grid-cols-1 max-lg:gap-[20px]">
        <div className="max-lg:order-1">
          <div className="sticky top-[40px] flex flex-col gap-[26px] max-lg:items-center max-lg:gap-[30px]">
            <h1 className="text-[40px] font-semibold text-[#2E2E2E] max-lg:text-center max-lg:text-[30px] max-sm:text-[25px]">
              Casebook <span className="text-[#2988FF]">помогает</span>
            </h1>
            <a href="/#CallbackForm" className="w-[291px] max-lg:w-full">
              <button className="w-full rounded-[16px] bg-[#2988FF] px-[32px] py-[20px] text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80">
                Стать партнером
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] max-lg:order-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] max-sm:py-[22px]"
            >
              <h2 className="text-[27px] font-semibold text-[#2E2E2E]">{card.title}</h2>
              <p className="text-[15px] text-[#2E2E2E]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
