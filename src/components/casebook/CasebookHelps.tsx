import { cards } from './casebook.constant';

export default function CasebookHelps() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-sm:px-[16px]">
      <div className="flex max-lg:flex-col max-lg:gap-[20px]">
        <div className="flex flex-1 grow-[1] flex-col gap-[26px] max-lg:items-center max-lg:gap-[30px]">
          <h1 className="text-[40px] font-semibold text-[#2E2E2E] max-lg:text-center max-lg:text-[30px] max-sm:text-[25px]">
            Casebook <span className="text-[#2988FF]">помогает</span>
          </h1>
          <a href="/#CallbackForm">
            <button className="w-[291px] rounded-[16px] bg-[#2988FF] px-[32px] py-[20px] text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 max-sm:w-full">
              Стать партнером
            </button>
          </a>
        </div>
        <div className="flex flex-1 grow-[1] flex-col gap-[20px]">
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
