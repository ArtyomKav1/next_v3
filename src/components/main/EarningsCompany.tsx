export default function EarningsCompany() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px]">
      <div className="flex flex-col gap-[56px] pt-[170px]">
        <div className="text-[40px] text-[#1A0D4D]">
          Зарабатывать с <span className="text-[#5837D0]"> PravoTech — легко</span>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px] max-xl:flex-col">
            <div className="flex h-[248px] flex-col justify-between rounded-[16px] bg-[#5837D0] px-[28px] py-[28px]">
              <div className="text-[28px] font-semibold text-[#FFFFFF]">Неограниченный доход</div>
              <div className="text-[15px] text-[#FFFFFF]">
                Вы можете продать любое количество лицензий — у нас нет лимитов на продажи
                продуктов.
              </div>
            </div>
            <div className="flex h-[248px] flex-col justify-between rounded-[16px] bg-[#E8E1FF] px-[28px] py-[28px]">
              <div className="text-[28px] font-semibold text-[#1A0D4D]">
                Готовый анализ целевой аудитории
              </div>
              <div className="text-[15px] text-[#1A0D4D]">
                Мы подробно расскажем о пользователях продуктов и поделимся списком потенциальных
                клиентов.
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] max-xl:flex-col">
            <div className="flex h-[248px] flex-1 flex-col justify-between rounded-[16px] bg-[#E8E1FF] px-[28px] py-[28px]">
              <div className="text-[28px] font-semibold text-[#1A0D4D]">Известный продукт</div>
              <div className="text-[15px] text-[#1A0D4D]">
                Нашими сервисами пользуются 3500+ крупнейших российских компаний — мы не нуждаемся в
                представлении.
              </div>
            </div>
            <div className="flex h-[248px] flex-1 flex-col justify-between rounded-[16px] bg-[#5837D0] px-[28px] py-[28px]">
              <div className="text-[28px] font-semibold text-[#FFFFFF]">Гарантия выплаты</div>
              <div className="text-[15px] text-[#FFFFFF]">
                Мы заключаем официальныйдоговор-оферты — деньги поступятна ваш счет через 3 дня
                послеподтверждения оплаты.
              </div>
            </div>
            <div className="flex h-[248px] flex-1 flex-col gap-[20px]">
              <div className="flex min-h-0 flex-grow flex-col justify-between rounded-[16px] bg-[#E8E1FF] px-[28px] py-[28px]">
                <div className="text-[28px] font-semibold tracking-tighter text-[#1A0D4D]">
                  Удаленная работа
                </div>
                <div className="text-[15px] text-[#1A0D4D]">
                  Закрывайте сделки из любой точки мира — нужны только компьютер и интернет.
                </div>
              </div>
              <button className="h-[58px] rounded-[16px] bg-[#EEFF2D] px-[32px] py-[20px] text-[15px] font-bold text-[#1A0D4D]">
                Стать партнером
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
