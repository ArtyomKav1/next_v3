'use client';
import { Formik } from 'formik';
import cn from 'classnames';
import errorImg from '../../../public/warning.png';
import okImg from '../../../public/check.png';
import { useState } from 'react';
import Image from 'next/image';

type initialValuesProps = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  agree1?: string;
  agree2?: string;
};

export function CallbackForm() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <div id="CallbackForm">
      <Formik
        enableReinitialize
        initialValues={{ name: '', phone: '', email: '', agree1: '', agree2: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);

          setSubmitting(false);
          resetForm();
        }}
        validate={(values) => {
          const errors: initialValuesProps = {};
          if (!values.name) errors.name = 'Required';
          if (!values.phone) errors.phone = 'Required';
          if (!values.email) errors.email = 'Required';
          if (!check1) errors.agree1 = 'Required';
          if (!check2) errors.agree2 = 'Required';

          return errors;
        }}
      >
        {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="h-full w-full pt-[170px] md:px-[48px]">
              <div className="flex h-full w-full flex-col gap-[24px] rounded-[32px] bg-[#5837d0] p-[20px] md:p-[40px] lg:flex-row">
                <div className="flex h-full w-full flex-col gap-[12px] text-[#FFFFFF]">
                  <div className="text-[32px]">Стать партнером</div>
                  <div className="text-[16px]">
                    Чтобы начать рекомендовать продукты ПравоТех, заполните форму, и мы свяжемся с
                    вами.
                  </div>
                </div>

                <div className="flex h-full w-full flex-col gap-[12px]">
                  <div className="group relative z-0 h-[56px] w-full overflow-hidden rounded-[12px] bg-[#A289FF] px-[20px]">
                    <input
                      className="peer absolute bottom-[5px] block w-[88%] appearance-none rounded-[5px] bg-transparent text-[#FFFFFF] focus:outline-none focus:ring-0"
                      type="text"
                      name="name"
                      // id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      autoComplete="off"
                    />
                    <div
                      // htmlFor="name"
                      className="absolute top-4 -z-10 -translate-y-4 scale-75 transform text-[#FFFFFF]/40 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      ФИО*
                    </div>

                    {touched.name && (
                      <div
                        className={cn(
                          'group absolute right-[10px] top-[25%] h-[25px] w-[25px] rounded-full text-white'
                        )}
                      >
                        {!errors.name ? (
                          <div>
                            <Image src={okImg} alt="" />
                          </div>
                        ) : (
                          <div>
                            <Image src={errorImg} alt="" />
                            <div className="absolute right-[30px] top-[-3px] hidden rounded-[5px] bg-red-600 p-[6px] group-hover:block">
                              Required
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="group relative z-0 h-[56px] w-full overflow-hidden rounded-[12px] bg-[#A289FF] px-[20px]">
                    <input
                      className="peer absolute bottom-[5px] block w-[88%] appearance-none rounded-[5px] bg-transparent text-[#FFFFFF] focus:outline-none focus:ring-0"
                      type="phone"
                      name="phone"
                      // id="name"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      autoComplete="off"
                    />
                    <div
                      // htmlFor="name"
                      className="absolute top-4 -z-10 -translate-y-4 scale-75 transform text-[#FFFFFF]/40 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Телефон*
                    </div>

                    {touched.phone && (
                      <div
                        className={cn(
                          'group absolute right-[10px] top-[25%] h-[25px] w-[25px] rounded-full text-white'
                        )}
                      >
                        {!errors.phone ? (
                          <div>
                            <Image src={okImg} alt="" />
                          </div>
                        ) : (
                          <div>
                            <Image src={errorImg} alt="" />
                            <div className="absolute right-[30px] top-[-3px] hidden rounded-[5px] bg-red-600 p-[6px] group-hover:block">
                              Required
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="group relative z-0 h-[56px] w-full overflow-hidden rounded-[12px] bg-[#A289FF] px-[20px]">
                    <input
                      className="peer absolute bottom-[5px] block w-[88%] appearance-none rounded-[5px] bg-transparent text-[#FFFFFF] focus:outline-none focus:ring-0"
                      type="email"
                      name="email"
                      // id="name"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      autoComplete="off"
                    />
                    <div
                      // htmlFor="name"
                      className="absolute top-4 -z-10 -translate-y-4 scale-75 transform text-[#FFFFFF]/40 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                      Email*
                    </div>

                    {touched.email && (
                      <div
                        className={cn(
                          'group absolute right-[10px] top-[25%] h-[25px] w-[25px] rounded-full text-white'
                        )}
                      >
                        {!errors.email ? (
                          <div>
                            <Image src={okImg} alt="" />
                          </div>
                        ) : (
                          <div>
                            <Image src={errorImg} alt="" />
                            <div className="absolute right-[30px] top-[-3px] hidden rounded-[5px] bg-red-600 p-[6px] group-hover:block">
                              Required
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="relative inline-flex items-center">
                    <div
                      className="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] bg-[#FEFEFE]/10"
                      onClick={() => setCheck1(!check1)}
                    >
                      {check1 && <div className="h-[14px] w-[14px] rounded-full bg-white/50"></div>}
                    </div>

                    <div className="ml-2 cursor-pointer text-[14px] text-white">
                      <p>
                        {' '}
                        Я согласен c{' '}
                        <a href="#" className="text-[#EEFF2D] underline">
                          условиями обработки персональных данных
                        </a>{' '}
                      </p>
                    </div>

                    {errors.agree1 && (
                      <div
                        className={cn(
                          'group absolute right-[10px] top-[25%] h-[25px] w-[25px] rounded-full text-white'
                        )}
                      >
                        {!errors.agree1 ? (
                          <div>
                            <Image src={okImg} alt="" />
                          </div>
                        ) : (
                          <div>
                            <Image src={errorImg} alt="" />
                            <div className="absolute right-[30px] top-[-3px] hidden rounded-[5px] bg-red-600 p-[3px] group-hover:block">
                              Required
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="relative inline-flex items-center">
                    <div
                      className="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] bg-[#FEFEFE]/10"
                      onClick={() => setCheck2(!check2)}
                    >
                      {check2 && <div className="h-[14px] w-[14px] rounded-full bg-white/50"></div>}
                    </div>

                    <div className="ml-2 cursor-pointer text-[14px] text-white">
                      <p>
                        Я ознакомлен c
                        <a href="#" className="text-[#EEFF2D] underline">
                          офертой
                        </a>
                      </p>
                    </div>

                    {errors.agree2 && (
                      <div
                        className={cn(
                          'group absolute right-[10px] top-[25%] h-[25px] w-[25px] rounded-full text-white'
                        )}
                      >
                        {!errors.agree2 ? (
                          <div>
                            <Image src={okImg} alt="ok" />
                          </div>
                        ) : (
                          <div>
                            <Image src={errorImg} alt="error" />
                            <div className="absolute right-[30px] top-[-3px] hidden rounded-[5px] bg-red-600 p-[3px] group-hover:block">
                              Required
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <button className="h-[56px] rounded-[12px] bg-[#EEFF2D] px-[23px] py-[12px] text-[16px] font-semibold leading-[120%] tracking-[-4%] text-[#0D0628] lg:w-[473px]">
                    Зарегистрироваться в программе
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
