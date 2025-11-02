import Image from 'next/image';
import CaseBook from '../../../public/CaseBook.svg';
import CaseLook from '../../../public/CaseLook.svg';
import { redirect } from 'next/navigation';

export default function ProductSelection() {
  return (
    <section className="mx-auto max-w-[1140px] px-[16px] max-sm:px-[16px] sm:px-[30px]">
      <div className="flex flex-col gap-[56px] pt-[170px] max-lg:pt-[80px]">
        <div className="flex gap-[20px] max-lg:flex-col">
          <div className="flex-1 text-[40px] font-semibold leading-[120%] text-[#1A0D4D]">
            Выбирайте, какой <span className="text-[#5837D0]">продукт</span> продавать
          </div>
          <div className="flex-1 text-[18px] leading-[140%] text-[#1A0D4D]">
            Наши сервисы повышают эффективность разных специалистов — от юристов до работников служб
            безопасности.
          </div>
        </div>
        <div className="flex gap-[20px] max-lg:flex-col">
          <div className="flex flex-1 flex-col gap-[32px] rounded-[16px] bg-[#DFECFB] px-[28px] pb-[32px] pt-[36px]">
            <div className="flex flex-col gap-[16px]">
              <div>
                <Image src={CaseBook} alt="CaseBook" />
              </div>
              <div className="text-[15px] text-[#1A0D4D]">
                Помогайте юристам продуктивно подготовиться к процессам, а компаниям — убедиться в
                добросовестности контрагента.
              </div>
            </div>
            <button
              onClick={() => redirect('/casebook')}
              className="w-[200px] rounded-[16px] bg-[#5B9AEC] px-[32px] py-[20px] text-[#FFFFFF]"
            >
              Узнать больше
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-[32px] rounded-[16px] bg-[#FFF0CC] px-[28px] pb-[32px] pt-[36px]">
            <div className="flex flex-col gap-[16px]">
              <div>
                <Image src={CaseLook} alt="CaseLook" />
              </div>
              <div className="text-[15px] text-[#1A0D4D]">
                Помогайте юристам находить эффективные судебные стратегии в крупнейшей базе решений.
              </div>
            </div>

            <button
              onClick={() => redirect('/caselook')}
              className="w-[200px] rounded-[16px] bg-[#FFBE23] px-[32px] py-[20px] text-[#1A0D4D]"
            >
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
