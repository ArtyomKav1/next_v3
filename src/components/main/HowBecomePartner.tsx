import { PlugLink } from "../PlugLink";

export default function HowBecomePartner() {
  return (
    <section className="mx-auto max-w-[1140px] px-[16px] max-sm:px-[16px] sm:px-[30px]">
      <div className="relative z-30 flex w-full items-start justify-between gap-[60px] pb-[100px] pt-[120px] max-lg:flex-col max-md:gap-[30px] max-md:py-[80px]">
        <h1 className="max-w-[45%] text-[40px] font-semibold text-[#1A0D4D] max-lg:max-w-full max-sm:text-[28px]">
          Как стать <span className="text-[#5837D0]">партнером</span>
        </h1>

        <div className="flex max-w-[45%] flex-1 flex-col gap-[16px] rounded-[16px] bg-[#EDE7FF] px-[28px] py-[32px] text-[16px] text-[#563cc0] max-lg:max-w-full">
          <div className="flex items-center gap-[20px] max-sm:gap-[26px]">
            <div className="text-[56px] font-semibold text-[#5837D0]">1</div>
            <div className="text-[19px] max-sm:text-[16px]">
              <a href="#CallbackForm" className="text-[#5837D0] underline">
                Заполните форму на сайте
              </a>{' '}
              или напишите нам на{' '}
              <PlugLink  className="text-[#5837D0] underline">
                affiliate@pravo.tech
              </PlugLink>
            </div>
          </div>

          <div className="flex items-center gap-[20px]">
            <div className="text-[56px] font-semibold text-[#5837D0]">2</div>
            <p className="text-[19px] max-sm:text-[16px]">
              Пройдите обучение за 2 дня и узнайте обо всех возможностях продуктов
            </p>
          </div>

          <div className="flex items-center gap-[20px]">
            <div className="text-[56px] font-semibold text-[#5837D0]">3</div>
            <p className="text-[19px] max-sm:text-[16px]">
              Продайте лицензию лиду из таргет-листа и получайте вознаграждение от 30 000 рублей
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
