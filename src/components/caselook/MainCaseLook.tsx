'use client';

import Image from 'next/image';
import info_CaseLook_slide_1 from '../../../public/info_CaseLook_slide_1.svg';
import info_CaseLook_slide_2 from '../../../public/info_CaseLook_slide_2.svg';
import info_CaseLook_slide_3 from '../../../public/inf0_CaseLook_slide_3.svg';
import info_CaseLook_slide_4 from '../../../public/info_CaseLook_slide_4.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

export default function MainCaseLook() {
  return (
    <div className="h-full w-full bg-[#FFFCF5]">
      <div className="mx-auto h-full max-w-[1224px] pb-[120px]">
        <div className="flex pt-[200px]">
          <div className="flex grow-[1] flex-col gap-[56px]">
            <div className="text-[40px] font-semibold text-[#2E2E2E]">
              Продажа <span className="text-[#F7A600]">без усилий</span>— возможности сервиса
              говорят за себя
            </div>
            <button className="w-[291px] rounded-[16px] bg-[#FFBE23] px-[32px] py-[20px] text-[15px] font-semibold text-[#2E2E2E]">
              Стать партнером
            </button>
          </div>
          <div className="flex grow-[1] flex-col gap-[20px]">
            <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">
                <span className="text-[56px]">21</span> поисковый фильтр
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Параметры поиска помогут быстро создать нужный запрос и подобрать только релевантную
                судебную практику..
              </div>
            </div>
            <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">
                <span className="text-[56px]">24/7</span> AI готовит тексты документов{' '}
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Онлайн-помощник напишет документ целиком, составит тезисный план документа или
                поможет подготовиться к переговорам.
              </div>
            </div>

            <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">
                <span className="text-[56px]">115+</span> млн документов
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Сервис содержит крупнейшую базу судебных актов — юрист легко найдет любой
                документ: от решений первой инстанции до особого мнения судьи.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[56px] pt-[200px]">
          <div className="text-[40px] font-semibold tracking-tight text-[#2E2E2E]">
            Почему рекомендовать Caselook — <span className="text-[#F7A600]">легко</span>
          </div>

          <div className="flex h-[371px] gap-[20px]">
            <div className="circle-schadow flex flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] leading-[150%]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">
                Сервис для всех юридических  специальностей
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Юристы, адвокаты, арбитражные управляющие и госслужащие — продукт полезен всем, кто
                работает в различных отраслях права.
              </div>
            </div>
            <div className="circle-schadow flex flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] leading-[150%]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">
                Один продукт на все юридические задачи
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                С сервисом юрист решит все рабочие задачи — от формирования правовой позиции по делу
                до создания качественного текста договора.
              </div>
            </div>
            <div className="flex flex-col justify-between gap-[20px]">
              <div className="circle-schadow flex h-full flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] leading-[150%]">
                <div className="text-[27px] font-semibold text-[#2E2E2E]">
                  Быстрый старт в системе и клиентская поддержка
                </div>
                <div className="text-[15px] text-[#2E2E2E]">
                  Юристу не нужно самостоятельно знакомиться с продуктом — мы обучаем возможностям
                  системы и быстро отвечаем на вопросы пользователей.
                </div>
              </div>
              <button className="w-full rounded-[16px] bg-[#FFBE23] px-[32px] py-[20px] text-[15px] font-bold text-[#2E2E2E]">
                Стать партнером
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[56px] pt-[200px]">
          <div className="text-[40px] font-semibold text-[#2E2E2E]">
            Как сервис помогает <span className="text-[#F7A600]">(</span>специалистам
            <span className="text-[#F7A600]">)</span> получать удовольствие от работы
          </div>
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="flex flex-col">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex w-[602px] flex-col gap-[20px]">
                      <div className="text-[27px] font-semibold text-[#2E2E2E]">
                        Предлагает победные судебные стратегии
                      </div>
                      <div className="text-[15px] text-[#2E2E2E]">
                        Юристу не придется тратить часы и вручную искать однотипную практику
                        со схожими доводами сторон — поисковые фильтры сервиса помогут за пару минут
                        найти уникальные аргументы в защиту своей позиции.
                      </div>
                    </div>
                    <div>
                      <Image src={info_CaseLook_slide_1} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex w-[602px] flex-col gap-[20px]">
                      <div className="text-[27px] font-semibold text-[#2E2E2E]">
                        Избавляет от бумажной работы
                      </div>
                      <div className="text-[15px] text-[#2E2E2E]">
                        Юрист может забыть о куче документов на рабочем столе — удобные инструменты
                        для анализа судебного акта позволят работать с текстом в одном окне.{' '}
                      </div>
                    </div>
                    <div>
                      <Image src={info_CaseLook_slide_2} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex w-[602px] flex-col gap-[20px]">
                      <div className="text-[27px] font-semibold text-[#2E2E2E]">
                        Рассказывает о новых трендах в судебной практике
                      </div>
                      <div className="text-[15px] text-[#2E2E2E]">
                        Юристу не придется искать новые решения по интересующей отрасли права —
                        сервис будет сообщать о новых судебных актах и резонансных делах по email.
                      </div>
                    </div>
                    <div>
                      <Image src={info_CaseLook_slide_3} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex w-[602px] flex-col gap-[20px]">
                      <div className="text-[27px] font-semibold text-[#2E2E2E]">
                        Ищет судебную практику за юриста
                      </div>
                      <div className="text-[15px] text-[#2E2E2E]">
                        Сервис сам найдет нужную практику, если у юриста нет на это времени.
                        Ему просто нужно сформировать запрос — мы отправим готовую подборку судебных
                        решений на почту в течение 48 часов.
                      </div>
                    </div>
                    <div>
                      <Image src={info_CaseLook_slide_4} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col gap-[56px] pt-[200px]">
          <div className="flex flex-col gap-[16px]">
            <div className="text-[40px] font-semibold tracking-tight text-[#2E2E2E]">
              Почему предлагать Caselook — <span className="text-[#F7A600]">выгодно</span>
            </div>
            <div className="text-[20px] text-[#2E2E2E]">
              Комиссия партнера — 50% стоимости лицензии.
            </div>
          </div>

          <div className="flex justify-between rounded-[16px] bg-[#FFF5E2] px-[32px] py-[44px]">
            <div className="flex items-center gap-[12px]">
              <div className="text-[20px] text-[#2E2E2E]">Вознаграждение за одну продажу:</div>
              <div className="text-[27px] font-bold text-[#FFBE23]">30 000 ₽</div>
            </div>
            <button className="h-[59px] w-[362px] rounded-[16px] bg-[#FFBE23] px-[32px] py-[20px] text-[15px] font-bold text-[#2E2E2E]">
              Стать партнером
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
