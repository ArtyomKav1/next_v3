import Image from 'next/image';
import main_black from '../../../public/main_dots_black.svg';

export default function HowBecomePartner() {
  return (
    <div className="relative pb-[400px] pt-[170px]">
      <div className="absolute left-[-30%] z-20 opacity-40">
        <Image src={main_black} alt="" />
      </div>

      <div className="absolute left-[0px] right-[0px] z-30 mx-auto flex w-full justify-between gap-[20px]">
        <div className="text-[40px] font-semibold text-[#1A0D4D]">
          Как стать <span className="text-[#5837D0]">партнером</span>
        </div>

        <div className="flex w-[530px] flex-col gap-[16px] rounded-[16px] bg-[#EDE7FF] px-[28px] py-[32px] text-[16px] text-[#563cc0]">
          <div className="flex items-center gap-[20px]">
            <div className="text-[56px] font-semibold text-[#5837D0]">1</div>
            <div className="text-[19px]">
              <a href="#" className="text-[#5837D0] underline">
                Заполните форму на сайте
              </a>
              или напишите нам на
              <a href="#" className="text-[#5837D0] underline">
                affiliate@pravo.tech
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="text-[56px] font-semibold text-[#5837D0]">2</div>
            <div className="text-[19px]">
              Пройдите обучение за 2 дня и узнайте обо всех возможностях продуктов
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="text-[56px] font-semibold text-[#5837D0]">3</div>
            <div className="text-[19px]">
              Продайте лицензию лиду из таргет-листа и получайте вознаграждение от 30 000 рублей
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
