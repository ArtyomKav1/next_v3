export default function AboutCompany() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] pt-[60px] max-sm:px-[16px]">
      <div className="relative z-30 flex w-full gap-[20px] pt-[170px] max-md:flex-col max-md:pt-[70px]">
        <h1 className="flex-1 text-[40px] font-semibold text-[#1A0D4D]">О PravoTech</h1>

        <div className="flex flex-1 flex-col gap-[16px] rounded-[16px] bg-[#EDE7FF] px-[28px] py-[32px] text-[16px] text-[#1A0D4D]">
          <p>
            Уже 15 лет вдохновляем компании на инновации — создаём IT-решения, которые оптимизируют
            бизнес процессы и высвобождают время для творчества.
          </p>
          <p>
            Мы создали юристам возможность для эффективной работы — разработали «Картотеку
            арбитражных дел», систему «Мой арбитр» и сделали российское правосудие электронным.
          </p>
        </div>
      </div>
    </section>
  );
}
