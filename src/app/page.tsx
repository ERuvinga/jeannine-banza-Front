'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import IconeComponent from '@/components/Icons';

//Components
import CircleDecoration from '@/components/SignIn/Decorations';
import { CiHome } from 'react-icons/ci';

export default function Home() {
  useEffect(() => {
    console.log('Lint Testing and Prettier');
  });
  return (
    <div className='w-[100%] h-[100vh] flex flex-row'>
      <Image
        className='w-[70%]'
        width={2000}
        height={2000}
        alt=''
        src={'/images/AuthIllustration.jpg'}
      />
      <div className='bg-Brand-neutral-800 flex grow items-center overflow-hidden justity-center relative'>
        <CircleDecoration
          width='big'
          color='bg-Brand-blueM-400'
          positions='top'
        />
        <CircleDecoration
          width='small'
          color='bg-Brand-blueM-400'
          positions='bottom'
        />
        <section>
          Connexion
          <IconeComponent
            icone={<CiHome />}
            color='text-Brand-blue-100'
            size='100'
          />
        </section>
      </div>
    </div>
  );
}
