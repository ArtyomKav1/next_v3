import vk from '@/public/trans-vk.svg';
import youtube from '@/public/trans-youtube.svg';
import tg from '@/public/trans-tg.svg';
import logo_yellow from '@/public/logo_yellow.svg';
import Image from 'next/image';
import { PlugLink } from './PlugLink';
import Link from 'next/link';

function FooterCaseBook() {
  return (
    <>
      <footer className="h-full bg-[#1A0D4D]">
        <div className="mx-auto h-full max-w-[1128px] py-[56px]">
          <div className="flex w-full flex-col gap-[40px] px-[30px] max-md:px-[20px]  text-[#FFFFFF]/70">
            <div className="flex h-full max-w-[1032px] flex-col justify-between max-md:gap-[30px] md:flex-row">
              <div className="flex flex-col gap-[32px]">
                <Image src={logo_yellow} width={120} height={24} alt="" />
                <div className="flex flex-col gap-[8px] *:cursor-pointer *:duration-300">
                  <a type="tel" href="tel:88007000201" className="text-[14px] hover:text-[#FFFFFF]">
                    8 800 700-02-01
                  </a>
                  <PlugLink className="text-[14px] hover:text-[#FFFFFF]">
                    affiliate@pravo.tech
                  </PlugLink>
                </div>

                <div className="flex w-[144px] gap-[12px] *:flex *:h-[40px] *:w-[40px] *:cursor-pointer *:items-center *:justify-center *:rounded-[10px] *:duration-300">
                  <PlugLink className="hover:scale-110">
                    <Image src={tg} alt="" />
                  </PlugLink>
                  <PlugLink className="hover:scale-110">
                    <Image src={vk} alt="" />
                  </PlugLink>
                  <PlugLink className="hover:scale-110">
                    <Image src={youtube} alt="" />
                  </PlugLink>
                </div>
              </div>

              <div className="flex flex-col gap-[12px] *:cursor-pointer *:duration-300">
                <h2 className="font-bold">Продукты</h2>
                <Link href={'/casebook'} className="text-[14px] hover:text-[#FFFFFF]">
                  Casebook
                </Link>
                <Link href={'/caselook'} className="text-[14px] hover:text-[#FFFFFF]">
                  Caselook
                </Link>
              </div>

              <div className="flex flex-col gap-[12px] *:cursor-pointer *:duration-300">
                <h2 className="font-bold">Информация</h2>
                <PlugLink className="text-[14px] hover:text-[#FFFFFF]">
                  Пользовательское соглашение
                </PlugLink>
                <PlugLink className="text-[14px] hover:text-[#FFFFFF]">Оферта</PlugLink>
                <PlugLink className="text-[14px] hover:text-[#FFFFFF]">Задать вопрос</PlugLink>
                <PlugLink className="text-[14px] hover:text-[#FFFFFF]">О нас</PlugLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterCaseBook;
