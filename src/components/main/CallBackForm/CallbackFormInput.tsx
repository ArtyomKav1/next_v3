import { Field, ErrorMessage as Error, useField } from 'formik';

import errorImg from '@/public/warning.png';
import okImg from '@/public/check.png';
import Image from 'next/image';
type ItemInputProps = {
  name: string;
  placeholder: string;
  type?: string;
};

export const CallbackFormInput = (props: ItemInputProps) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="group relative z-0 h-[56px] w-full overflow-hidden rounded-[12px] bg-[#A289FF] px-[20px]">
      <Field
        className="peer absolute bottom-[5px] block w-[88%] appearance-none rounded-[5px] bg-transparent text-[#FFFFFF] focus:outline-none focus:ring-0"
        type={props.type || 'text'}
        name={props.name}
        id={props.name}
        placeholder=" "
        autoComplete="off"
        onBlur={field.onBlur}
      />

      <div className="pointer-events-none absolute left-[19px] top-4 -z-10 origin-left -translate-y-4 scale-75 transform text-[#FFFFFF]/40 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">
        {props.placeholder}
      </div>

      {meta.touched && !meta.error && (
        <div className="group">
          <Image
            src={okImg}
            alt="check"
            className="absolute right-2.5 top-6 h-4 w-4 2xl:top-5 2xl:h-5 2xl:w-5"
          />
        </div>
      )}

      <Error name={props.name}>
        {(error) => (
          <div className="group">
            <Image
              src={errorImg}
              width={10}
              height={10}
              className="absolute right-2.5 top-5 h-4 w-4 2xl:top-4 2xl:h-5 2xl:w-5"
              alt="warning"
            />
            <span className="pointer-events-none absolute right-[50px] top-3 rounded-lg bg-red-500 px-[15px] py-[5px] text-[12px] text-white opacity-0 transition-all duration-300 group-hover:opacity-80">
              {error}
            </span>
          </div>
        )}
      </Error>
    </div>
  );
};
