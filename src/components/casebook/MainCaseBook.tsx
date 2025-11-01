'use client';

import Image from 'next/image';
import info_CaseBook_slide_1 from '../../../public/info_CaseBook_slide_1.svg';
import info_CaseBook_slide_2 from '../../../public/info_CaseBook_slide_2.svg';
import info_CaseBook_slide_3 from '../../../public/info_CaseBook_slide_3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useRef } from 'react';

export default function MainCaseBook() {
  const swiperRef = useRef(null);
  return (
    <div className="h-full w-full bg-[#F6FAFF]">
      <div className="mx-auto h-full max-w-[1224px] pb-[120px]">
        <div className="flex flex-col gap-[56px] pt-[200px]">
          <div className="text-[40px] font-semibold tracking-tight text-[#2E2E2E]">
            Рекомендуйте продукт, опираясь на <span className="text-[#2988FF]">цифры</span>
          </div>
          <div className="flex h-[314px] gap-[20px]">
            <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#D6E8FF] px-[22px] py-[32px]">
              <div className="flex flex-col gap-[8px]">
                <div className="text-[56px] font-semibold text-[#2E2E2E]">28+</div>
                <div className="text-[27px] font-semibold text-[#2E2E2E]">млн компаний в базе</div>
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Легко проявить должную осмотрительность в один клик.
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#D6E8FF] px-[22px] py-[32px]">
              <div className="flex flex-col gap-[8px]">
                <div className="text-[56px] font-semibold text-[#2E2E2E]">35+</div>
                <div className="text-[27px] font-semibold text-[#2E2E2E]">
                  факторов риска по компаниям
                </div>
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Все негативные факторы по организации — на дашбордах.
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#D6E8FF] px-[22px] py-[32px]">
              <div className="flex flex-col gap-[8px]">
                <div className="text-[56px] font-semibold text-[#2E2E2E]">100% </div>
                <div className="text-[27px] font-semibold text-[#2E2E2E]">
                  данных по делам и организациям
                </div>
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Сервис уведомит пользователя о новых событиях по email.
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#D6E8FF] px-[22px] py-[32px]">
              <div className="flex flex-col gap-[8px]">
                <div className="text-[56px] font-semibold text-[#2E2E2E]">225+</div>
                <div className="text-[27px] font-semibold text-[#2E2E2E]">
                  млн судебных дел в системе
                </div>
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Пользователь найдет всю информацию по делу в одном окне.
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-[200px]">
          <div className="flex flex-1 grow-[1] flex-col gap-[56px]">
            <div className="text-[40px] font-semibold text-[#2E2E2E]">
              Casebook <span className="text-[#2988FF]">помогает</span>
            </div>
            <button className="w-[291px] rounded-[16px] bg-[#2988FF] px-[32px] py-[20px] text-[15px]">
              Стать партнером
            </button>
          </div>
          <div className="flex flex-1 grow-[1] flex-col gap-[20px]">
            <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">Юристам</div>
              <div className="text-[15px] text-[#2E2E2E]">
                Работать с процедурой банкротства в одной системе и быть в курсе событий по делу.
              </div>
            </div>
            <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">
                Специалистам по банкротству
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Готовиться к судебному процессу и отправлять документы в суд в упрощенном порядке.
              </div>
            </div>
            <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">Службе безопасности</div>
              <div className="text-[15px] text-[#2E2E2E]">
                Проверять физических и юридических лиц и отслеживать изменения в реальном времени.
              </div>
            </div>
            <div className="circle-schadow flex flex-col gap-[32px] rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">
                Риск-менеджерам и андеррайтерам
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Собирать и анализировать сведения о заемщиках в удобном формате.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[56px] pt-[200px]">
          <div className="text-[40px] font-semibold tracking-tight text-[#2E2E2E]">
            Почему рекомендовать Casebook — <span className="text-[#2988FF]">легко</span>
          </div>

          <div className="flex h-[371px] gap-[20px]">
            <div className="circle-schadow flex flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] leading-[150%]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">
                Сервис для всех вертикалей бизнеса
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Работать с процедурой банкротства в одной системе и быть в курсе событий по делу.
              </div>
            </div>
            <div className="circle-schadow flex flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] leading-[150%]">
              <div className="text-[27px] font-semibold text-[#2E2E2E]">
                Актуальность и полнота данных
              </div>
              <div className="text-[15px] text-[#2E2E2E]">
                Сервис содержит сведения из 35+ источников — информация обновляется в режиме
                реального времени. .
              </div>
            </div>
            <div className="flex flex-col justify-between gap-[20px]">
              <div className="circle-schadow flex h-full flex-col justify-between rounded-[16px] bg-[#FFFFFF] px-[32px] py-[44px] leading-[150%]">
                <div className="text-[27px] font-semibold text-[#2E2E2E]">
                  Быстрый старт в системе и клиентская поддержка
                </div>
                <div className="text-[15px] text-[#2E2E2E]">
                  Клиенту не нужно самостоятельно знакомиться с продуктом — мы обучаем возможностям
                  системы и быстро отвечаем на вопросы.
                </div>
              </div>
              <button className="w-full rounded-[16px] bg-[#2988FF] px-[32px] py-[20px] text-[15px] font-bold">
                Стать партнером
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[56px] pt-[200px]">
          <div className="text-[40px] font-semibold text-[#2E2E2E]">
            Как сервис помогает <span className="text-[#2988FF]">(</span>специалистам
            <span className="text-[#2988FF]">)</span> получать удовольствие от работы
          </div>
          <div className="relative">
            <div className="swiper-button-prev absolute left-[-20px] top-1/2 z-10"></div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
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
                        Настраивает на победу в судебном споре
                      </div>
                      <div className="text-[15px] text-[#2E2E2E]">
                        Система покажет вероятность победы над судебным оппонентом, поможет не
                        пропустить заседание или процессуальный срок и сообщит вам о любых
                        изменениях в судебном деле.
                      </div>
                    </div>
                    <div>
                      <Image src={info_CaseBook_slide_1} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex w-[602px] flex-col gap-[20px]">
                      <div className="text-[27px] font-semibold text-[#2E2E2E]">
                        Выбирает проверенных контрагентов
                      </div>
                      <div className="text-[15px] text-[#2E2E2E]">
                        Сервис оценивает все факторы риска по компании, а еще анализирует ее исковую
                        нагрузку — так пользователь сможет легко узнать реальное положение дел в
                        организации и быстро спрогнозировать ее будущее.
                      </div>
                    </div>
                    <div>
                      <Image src={info_CaseBook_slide_2} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex w-[602px] flex-col gap-[20px]">
                      <div className="text-[27px] font-semibold text-[#2E2E2E]">
                        Упрощает коммуникацию с судом
                      </div>
                      <div className="text-[15px] text-[#2E2E2E]">
                        Юрист может отправлять обращения в суд и знакомиться с материалами дел, не
                        покидая рабочего места — готовые шаблоны документов сэкономят время на
                        заполнении данных, а неограниченный доступ к делу поможет быть в курсе всех
                        фактических событий в споре.
                      </div>
                    </div>
                    <div>
                      <Image src={info_CaseBook_slide_3} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        <div className="flex flex-col gap-[56px] pt-[200px]">
          <div className="flex flex-col gap-[16px]">
            <div className="text-[40px] font-semibold text-[#2E2E2E]">
              <span className="text-[#2988FF]">Тарифы</span> Casebook
            </div>
            <div className="text-[20px] text-[#2E2E2E]">
              Выбирайте тариф под требования конкретного клиента — рекомендуйте то, что нужно именно
              ему.
            </div>
          </div>

          <div className="flex h-[339px] gap-[20px]">
            <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#DBEBFF] px-[32px] py-[44px]">
              <div className="flex flex-col gap-[24px]">
                <div className="text-[27px] font-semibold text-[#2E2E2E]">
                  Casebook <span className="text-[#2988FF]">Standard</span>{' '}
                </div>
                <div className="text-[15px] text-[#2E2E2E]">
                  Для мониторинга судебных дел и проверки контрагентов — юридических и физических
                  лиц
                </div>
              </div>
              <div className="flex gap-[20px]">
                <div className="flex flex-col gap-[6px]">
                  <div className="text-[15px] text-[#2E2E2E]">Вознаграждение за одну продажу:</div>
                  <div className="text-[27px] font-bold text-[#2988FF]">30 000 ₽</div>
                </div>
                <div>
                  <button className="w-[291px] rounded-[16px] bg-[#2988FF] px-[32px] py-[20px] text-[15px]">
                    Стать партнером
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-[16px] bg-[#C2DDFF] px-[32px] py-[44px]">
              <div className="flex flex-col gap-[24px]">
                <div className="text-[27px] font-semibold text-[#2E2E2E]">
                  Casebook <span className="text-[#2988FF]">Pro</span>{' '}
                </div>
                <div className="text-[15px] text-[#2E2E2E]">
                  Для подачи документов в арбитражные суды онлайн и ознакомления с материалами дел +
                  все возможности тарифа Standard
                </div>
              </div>
              <div className="flex gap-[20px]">
                <div className="flex flex-col gap-[6px]">
                  <div className="text-[15px] text-[#2E2E2E]">Вознаграждение за одну продажу:</div>
                  <div className="text-[27px] font-bold text-[#2988FF]">42 000 ₽</div>
                </div>
                <div>
                  <button className="w-[291px] rounded-[16px] bg-[#005BCC] px-[32px] py-[20px] text-[15px]">
                    Стать партнером
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
