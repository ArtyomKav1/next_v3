export default function EarningsCompany() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] max-md:px-[20px]">
      <div className="flex flex-col gap-[56px] pt-[170px] max-lg:gap-[30px] max-sm:gap-[15px] max-sm:pt-[50px]">
        <h1 className="text-[40px] font-semibold text-[#1A0D4D] max-lg:text-center max-lg:text-[30px]">
          Зарабатывать с <span className="text-[#5837D0]"> PravoTech — легко</span>
        </h1>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px] max-xl:flex-col">
            <div className="flex h-[248px] flex-col justify-between rounded-[16px] bg-[#5837D0] px-[28px] py-[28px] max-xl:h-full">
              <h2 className="text-[28px] font-semibold text-[#FFFFFF]">Неограниченный доход</h2>
              <p className="text-[15px] text-[#FFFFFF]">
                Вы можете продать любое количество лицензий — у нас нет лимитов на продажи
                продуктов.
              </p>
            </div>
            <div className="flex h-[248px] flex-col justify-between rounded-[16px] bg-[#E8E1FF] px-[28px] py-[28px] max-xl:h-full">
              <h2 className="text-[28px] font-semibold text-[#1A0D4D]">
                Готовый анализ целевой аудитории
              </h2>
              <p className="text-[15px] text-[#1A0D4D]">
                Мы подробно расскажем о пользователях продуктов и поделимся списком потенциальных
                клиентов.
              </p>
            </div>
          </div>
          <div className="flex gap-[20px] max-xl:flex-col">
            <div className="flex h-[248px] flex-1 flex-col justify-between rounded-[16px] bg-[#E8E1FF] px-[28px] py-[28px]">
              <h2 className="text-[28px] font-semibold text-[#1A0D4D]">Известный продукт</h2>
              <p className="text-[15px] text-[#1A0D4D]">
                Нашими сервисами пользуются 3500+ крупнейших российских компаний — мы не нуждаемся в
                представлении.
              </p>
            </div>
            <div className="flex h-[248px] flex-1 flex-col justify-between rounded-[16px] bg-[#5837D0] px-[28px] py-[28px]">
              <h2 className="text-[28px] font-semibold text-[#FFFFFF]">Гарантия выплаты</h2>
              <p className="text-[15px] text-[#FFFFFF]">
                Мы заключаем официальныйдоговор-оферты — деньги поступятна ваш счет через 3 дня
                послеподтверждения оплаты.
              </p>
            </div>
            <div className="flex h-[248px] flex-1 flex-col gap-[20px]">
              <div className="flex min-h-0 flex-grow flex-col justify-between rounded-[16px] bg-[#E8E1FF] px-[28px] py-[28px]">
                <h2 className="text-[28px] font-semibold tracking-tighter text-[#1A0D4D]">
                  Удаленная работа
                </h2>
                <p className="text-[15px] text-[#1A0D4D]">
                  Закрывайте сделки из любой точки мира — нужны только компьютер и интернет.
                </p>
              </div>
              <a
                href="#CallbackForm"
                className="flex h-[58px] items-center justify-center rounded-[16px] bg-[#EEFF2D] px-[32px] py-[20px] text-[15px] font-bold text-[#1A0D4D] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
              >
                <button>Стать партнером</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
