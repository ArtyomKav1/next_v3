import mts from '@/public/bank/mtc.svg';
import vtb from '@/public/bank/vtb.svg';
import meg from '@/public/bank/meg.svg';
import gaz from '@/public/bank/gaz.svg';
import ros from '@/public/bank/ros.svg';
import hh from '@/public/bank/hh.svg';
import sam from '@/public/bank/sam.svg';

import T from '@/public/bank/T.svg';


import { StaticImageData } from 'next/image';

export  const partnerCompanies: { src: StaticImageData; alt: string }[] = [
  { src: mts, alt: 'MTS' },
  { src: vtb, alt: 'VTB' },
  { src: meg, alt: 'MegaFon' },
  { src: gaz, alt: 'Gazprom' },
  { src: ros, alt: 'Rosneft' },
  { src: hh, alt: 'HeadHunter' },
  { src: sam, alt: 'Samokat' },
  { src: T, alt: 'T' },
];

export const radioQuestions = [
  {
    question: 'Что такое партнерская программа?',
    answer:
      'Это упрощенная форма сотрудничества по договору-оферты. Партнеры рекомендуют сервисы PravoTech и получают вознаграждение за привлечение новых клиентов.',
  },
  {
    question: 'Кто может стать участником партнерской программы?',
    answer:
      'Это упрощенная форма сотрудничества по договору-оферты. Партнеры рекомендуют сервисы PravoTech и получают вознаграждение за привлечение новых клиентов.',
  },
  {
    question: 'Как происходит выплата вознаграждения?',
    answer:
      'Это упрощенная форма сотрудничества по договору-оферты. Партнеры рекомендуют сервисы PravoTech и получают вознаграждение за привлечение новых клиентов.',
  },
  {
    question: 'К кому обратиться, если у меня вопрос по сервисам Caselook/Casebook?',
    answer:
      'Это упрощенная форма сотрудничества по договору-оферты. Партнеры рекомендуют сервисы PravoTech и получают вознаграждение за привлечение новых клиентов.',
  },
  {
    question: 'Есть ли ограничения по количеству проданных лицензий?',
    answer:
      'Это упрощенная форма сотрудничества по договору-оферты. Партнеры рекомендуют сервисы PravoTech и получают вознаграждение за привлечение новых клиентов.',
  },
];
