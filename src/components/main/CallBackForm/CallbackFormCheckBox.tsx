'use client';
import { Field, ErrorMessage as Error, useField } from 'formik';
import Image from 'next/image';
import errorImg from '@/public/warning.png';

type ItemCheckBoxProps = {
  name: string;
  label: string;
  linkText?: string;
  linkHref?: string;
};

export const CallbackFormCheckBox = (props: ItemCheckBoxProps) => {
  const [field] = useField(props.name);

  return (
    <div className="relative inline-flex items-center">
      <Field
        className="peer absolute block h-[30px] w-[30px] appearance-none rounded-[5px] border-black bg-transparent pt-2.5 text-[#FFFFFF] focus:outline-none focus:ring-0"
        type="checkbox"
        name={props.name}
      />
      <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[6px] bg-[#FEFEFE]/10">
        {field.value && <div className="h-[14px] w-[14px] rounded-full bg-white/50" />}
      </div>

      <div className="ml-2 cursor-pointer text-[14px] text-white">
        <p>
          {props.label}{' '}
          {props.linkText && props.linkHref && (
            <a href={props.linkHref} className="text-[#EEFF2D] underline">
              {props.linkText}
            </a>
          )}
        </p>
      </div>

      <Error name={props.name}>
        {(error) => (
          <div className="group">
            <Image
              src={errorImg}
              width={10}
              height={10}
              className="absolute right-2.5 top-1 h-4 w-4 2xl:top-1 2xl:h-5 2xl:w-5"
              alt="warning"
            />
            <span className="pointer-events-none absolute right-[50px] top-0 rounded-lg bg-red-500 px-[15px] py-[5px] text-[12px] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
              {error}
            </span>
          </div>
        )}
      </Error>
    </div>
  );
};
