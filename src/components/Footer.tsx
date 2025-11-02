import vk from '@/public/trans-vk.svg';
import youtube from '@/public/trans-youtube.svg';
import tg from '@/public/trans-tg.svg';
import logo_yellow from '@/public/logo_yellow.svg';
import Image from 'next/image';

function FooterCaseBook() {
  return (
    <>
      <div className="h-full bg-[#1A0D4D]">
        <div className="mx-auto h-full max-w-[1128px] py-[56px]">
          <div className="flex w-full flex-col gap-[40px] px-[48px] text-[#FFFFFF]/70">
            <div className="flex max-md:gap-[30px] h-full max-w-[1032px] flex-col justify-between md:flex-row">
              <div className="flex flex-col gap-[32px]">
                <Image src={logo_yellow} width={120} height={24} alt="" />
                <div className="flex flex-col gap-[8px] *:cursor-pointer *:duration-300">
                  <p className="text-[14px] hover:text-[#FFFFFF]">8 800 700-02-01</p>
                  <p className="text-[14px] hover:text-[#FFFFFF]">affiliate@pravo.tech</p>
                </div>

                <div className="flex w-[144px] gap-[12px] *:flex *:h-[40px] *:w-[40px] *:cursor-pointer *:items-center *:justify-center *:rounded-[10px] *:duration-300">
                  <div className="hover:scale-110">
                    <Image src={tg} alt="" />
                  </div>
                  <div className="hover:scale-110">
                    <Image src={vk} alt="" />
                  </div>
                  <div className="hover:scale-110">
                    <Image src={youtube} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[12px] *:cursor-pointer *:duration-300">
                <p className="font-bold">Продукты</p>
                <p className="text-[14px] hover:text-[#FFFFFF]">Casebook</p>
                <p className="text-[14px] hover:text-[#FFFFFF]">Caselook</p>
              </div>

              <div className="flex flex-col gap-[12px] *:cursor-pointer *:duration-300">
                <p className="font-bold">Информация</p>
                <p className="text-[14px] hover:text-[#FFFFFF]">Пользовательское соглашение</p>
                <p className="text-[14px] hover:text-[#FFFFFF]">Оферта</p>
                <p className="text-[14px] hover:text-[#FFFFFF]">Задать вопрос</p>
                <p className="text-[14px] hover:text-[#FFFFFF]">О нас</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterCaseBook;
