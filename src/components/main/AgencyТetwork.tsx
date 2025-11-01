export default function AgencyNetwork() {
  return (
    <section className="h-[570px] w-full bg-[#5837D0]">
      <div className="mx-auto max-w-[1140px] px-[30px]">
        <div className="py-[88px] max-md:py-[32px]">
          <div className="flex max-w-[640px] flex-col gap-[44px] max-md:gap-[20px]">
            <div className="flex flex-col gap-[24px]">
              <div className="text-[50px] font-bold leading-[120%] max-md:text-[30px]">
                Агентская сеть от крупной IT-компании
              </div>
              <div className="text-[#FFFFFF]/80">
                Рекомендуйте юридические продукты и зарабатывайте от 180 000 рублей ежемесячно.
              </div>
            </div>
            <div>
              <a href="#CallbackForm">
                <button className="h-[58px] w-[291px] rounded-[16px] bg-[#EEFF2D] px-[32px] py-[18px] font-bold text-[#1A0D4D] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80">
                  Стать партнером
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[20px] max-md:flex-col max-md:gap-[10px] relative z-30">
          <div className="flex flex-1 items-center gap-[20px] max-md:gap-[10px] w-full">
            <div className="flex h-[140px] flex-1 flex-col items-center gap-[0px] rounded-[16px] bg-[#EDE7FF] px-[12px] py-[44px] transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-[32px] font-bold text-[#5837D0] max-lg:text-[24px] max-md:text-[18px]">
                от 30 000 ₽
              </div>
              <div className="text-center text-[15px] text-[#1A0D4D]">
                за продажу одной лицензии
              </div>
            </div>

            <div className="flex h-[140px] flex-1 flex-col items-center gap-[0px] rounded-[16px] bg-[#EDE7FF] px-[12px] py-[44px] transition-all duration-300 hover:-translate-y-0.5">
              <div className="text-[32px] font-bold text-[#5837D0] max-lg:text-[24px] max-md:text-[18px]">
                3 дня
              </div>
              <div className="text-center text-[15px] text-[#1A0D4D]">на получение гонорара</div>
            </div>
          </div>
          <div className="flex flex-1 items-center gap-[20px] max-md:gap-[10px]">
            <div className="flex h-[180px] flex-1 flex-col items-center gap-[12px] rounded-[16px] bg-[#1A0D4D] px-[12px] py-[44px] transition-all duration-300 hover:-translate-y-0.5 max-lg:gap-[0px]">
              <div className="text-[32px] font-bold text-[#FFFFFF] max-lg:text-[24px] max-md:text-[18px]">
                180 000 ₽
              </div>
              <div className="text-center text-[15px] text-[#FFFFFF]">
                средний заработок партнеров в месяц
              </div>
            </div>
            <div className="flex h-[180px] flex-1 flex-col items-center gap-[12px] rounded-[16px] bg-[#1A0D4D] px-[12px] py-[44px] transition-all duration-300 hover:-translate-y-0.5 max-lg:gap-[0px]">
              <div className="text-[32px] font-bold text-[#FFFFFF] max-lg:text-[24px] max-md:text-[18px]">
                390 000 ₽
              </div>
              <div className="text-center text-[15px] text-[#FFFFFF]">
                максимальный заработок нашего партнера
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
