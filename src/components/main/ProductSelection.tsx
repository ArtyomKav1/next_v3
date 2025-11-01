import Image from 'next/image';
import CaseBook from '../../../public/CaseBook.svg';
import CaseLook from '../../../public/CaseLook.svg';

export default function ProductSelection() {
  return (
    <div className="flex flex-col gap-[56px] pt-[170px]">
      <div className="flex gap-[20px]">
        <div className="text-[40px] font-semibold leading-[120%] text-[#1A0D4D]">
          Выбирайте, какой <span className="text-[#5837D0]">продукт</span> продавать
        </div>
        <div className="text-[18px] leading-[140%] text-[#1A0D4D]">
          Наши сервисы повышают эффективность разных специалистов — от юристов до работников служб
          безопасности.
        </div>
      </div>
      <div className="flex gap-[20px]">
        <div className="flex flex-1 flex-col gap-[32px] rounded-[16px] bg-[#DFECFB] px-[28px] pb-[32px] pt-[36px]">
          <div className="flex flex-col gap-[16px]">
            <div>
              <Image src={CaseBook} alt=""></Image>
            </div>
            <div className="text-[15px] text-[#1A0D4D]">
              Помогайте юристам продуктивно подготовиться к процессам, а компаниям — убедиться в
              добросовестности контрагента.
            </div>
          </div>
          <button className="w-[181px] rounded-[16px] bg-[#5B9AEC] px-[32px] py-[20px] text-[#FFFFFF]">
            Узнать больше
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-[32px] rounded-[16px] bg-[#FFF0CC] px-[28px] pb-[32px] pt-[36px]">
          <div className="flex flex-col gap-[16px]">
            <div>
              <Image src={CaseLook} alt=""></Image>
            </div>
            <div className="text-[15px] text-[#1A0D4D]">
              Помогайте юристам находить эффективные судебные стратегии в крупнейшей базе решений.
            </div>
          </div>
          <button className="w-[181px] rounded-[16px] bg-[#FFBE23] px-[32px] py-[20px] text-[#1A0D4D]">
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
}

