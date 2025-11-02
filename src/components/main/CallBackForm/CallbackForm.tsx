'use client';
import { Formik, Form } from 'formik';
import { CallbackFormInput } from './CallbackFormInput';
import { CallbackFormCheckBox } from './CallbackFormCheckBox';
import { initialValues, validationSchema } from './helper';
import { useState } from 'react';
import Loader_white from '@/public/Loader_white.svg';
import { CallBackFormPhoneInput } from './CallBackForm_phoneInput';
import Image from 'next/image';
import checkResponse from '@/public/checkResponse.svg';

export function CallbackForm() {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);

  const postData = async (data: {
    name: string;
    phone: string;
    email: string;
    agree1: boolean;
    agree2: boolean;
  }) => {
    setErrorFetch(false);
    setLoading(true);
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(data);
          setPopup(true);
          resolve('');
        }, 2000);
      });
    } catch (error) {
      setErrorFetch(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-[1140px] px-[30px] py-[60px] max-sm:px-[16px]">
      <div id="CallbackForm">
        <div className="h-full w-full">
          <div className="flex h-full w-full flex-col gap-[24px] rounded-[32px] bg-[#5837d0] p-[20px] md:p-[40px] lg:flex-row">
            {errorFetch && (
              <div className="absolute left-0 top-[-60px] flex w-full items-center justify-center">
                <p className="rounded-lg bg-red-600 px-2.5 py-1.5 text-white">
                  Ошибка отправки запроса.
                </p>
              </div>
            )}

            <div className="flex h-full w-full flex-col gap-[12px] text-[#FFFFFF]">
              <h1 className="text-[32px]">Стать партнером</h1>
              <p className="text-[16px]">
                Чтобы начать рекомендовать продукты ПравоТех, заполните форму, и мы свяжемся с вами.
              </p>
            </div>

            <div className="relative flex h-full w-full flex-col gap-[12px]">
              {loading && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-5 rounded-xl bg-[#5837d0]/80">
                  <Image src={Loader_white} className="animate-spin" width={40} alt="Loader" />
                  <p className="text-white">Загрузка</p>
                </div>
              )}

              {!popup ? (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { setSubmitting }) => {
                    try {
                      await postData(values);
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  {() => (
                    <Form>
                      <div className="flex flex-col gap-[12px]">
                        <CallbackFormInput name="name" placeholder="ФИО*" />

                        <CallBackFormPhoneInput name="phone" placeholder="Телефон*" />
                        <CallbackFormInput name="email" placeholder="Email*" type="email" />

                        <CallbackFormCheckBox
                          name="agree1"
                          label="Я согласен c"
                          linkText="условиями обработки персональных данных"
                          linkHref="#"
                        />

                        <CallbackFormCheckBox
                          name="agree2"
                          label="Я ознакомлен c"
                          linkText="офертой"
                          linkHref="#"
                        />

                        <button
                          type="submit"
                          className="h-[56px] rounded-[12px] bg-[#EEFF2D] px-[23px] py-[12px] text-[16px] font-semibold leading-[120%] tracking-[-4%] text-[#0D0628] transition-all duration-300 hover:bg-[#ffffff] lg:w-[473px]"
                        >
                          Зарегистрироваться в программе
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              ) : (
                <div className="flex h-[332px] flex-col items-center justify-center gap-4 px-9 py-6 text-center text-white/80">
                  <Image src={checkResponse} width={40} alt="success" />
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[22px] leading-7 text-white">Заявка принята</h1>
                    <p>
                      Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время для обсуждения
                      деталей партнерской программы.
                    </p>
                  </div>
                  <div
                    className="cursor-pointer underline transition-all duration-300 hover:opacity-80"
                    onClick={() => setPopup(false)}
                  >
                    Заполнить форму повторно
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
