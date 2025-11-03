'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { slides } from './casebook.constant';

export default function PleasureWork() {
  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-sm:px-[16px]">
      <div className="flex flex-col gap-[56px] max-lg:gap-[30px] max-sm:gap-[15px]">
        <h1 className="text-[40px] font-semibold text-[#2E2E2E] max-lg:text-center max-lg:text-[30px] max-sm:text-[25px]">
          Как сервис помогает <span className="text-[#2988FF]">(</span>специалистам
          <span className="text-[#2988FF]">)</span> получать удовольствие от работы
        </h1>
        <div className="relative">
          <div className="swiper-button-prev rounded-full transition-colors duration-300 hover:bg-white max-lg:hidden"></div>
          <div className="swiper-button-next right-[-100px] rounded-full transition-colors duration-300 hover:bg-white hover:text-[#000000] max-lg:hidden"></div>
          <div className="pagination"></div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.pagination',
              clickable: true,
            }}

          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col">
                  <div className="flex items-center gap-[20px] max-md:flex-col">
                    <div className="flex w-[602px] flex-col gap-[20px] max-lg:w-full max-lg:gap-[10px]">
                      <h1 className="text-[27px] font-semibold text-[#2E2E2E] max-lg:text-[18px]">
                        {item.title}
                      </h1>
                      <p className="text-[15px] text-[#2E2E2E] max-lg:text-[12px]">{item.text}</p>
                    </div>
                    <div className="relative aspect-[16/10] w-full max-w-[500px] max-md:max-w-full">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
