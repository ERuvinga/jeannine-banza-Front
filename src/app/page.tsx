'use client';

import Image from 'next/image';
import IconeComponent from '@/components/Icons';

//Components
import CircleDecoration from '@/components/SignIn/Decorations';
import { CiMail } from 'react-icons/ci';
import InputField from '@/components/SignIn/InputField';

//Types
import { InputFieldDatas } from '@/utils/constants/Types';
import CustomButton from '@/components/SignIn/CustomButton';

export default function Home() {
  // States

  // constants
  const FieldList = [
    {
      label: 'Email',
      placehold: 'Entrer votre adress mail',
      icon: (
        <IconeComponent
          icone={<CiMail />}
          color='text-Brand-neutral-50'
          size='15'
        />
      ),
      handleChange: (value: string) => console.log(value),
    },
  ] as InputFieldDatas[];

  return (
    <div className='w-[100%] h-[100vh] bg-Brand-neutral-800 flex flex-row'>
      <Image
        className='w-[70%]'
        width={2500}
        height={2500}
        alt='Illustration App'
        src={'/images/AuthIllustration.jpg'}
      />
      <div className='bg-Brand-neutral-800 flex grow items-center justify-center  overflow-hidden relative'>
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
        <section className='w-[80%] flex flex-col space-y-6 items-center justify-center '>
          <div className='w-[100%] flex flex-col space-y-1 items-center justify-center '>
            <div className='h-[90px] w-[60%] flex items-center justify-center'>
              <Image
                className='w-[100%]'
                width={0}
                height={0}
                alt='logo CidLab'
                src={'/logo.svg'}
              />
            </div>
            <span className='text-neutral-50 font-[sans-bold] text-lg'>
              Se connecter
            </span>
          </div>
          <div className='flex flex-col space-y-6 w-[100%]'>
            {FieldList.map((data, index) => (
              <InputField
                item={data}
                key={`${data.label}_${index}`}
                onchange={data.handleChange}
              />
            ))}
          </div>
          <CustomButton
            label='Suivant'
            bgColor='bg-main-400'
            textColor='text-Brand-neutral-50'
            HandleClick={() => console.log('datas')}
          />
        </section>
      </div>
    </div>
  );
}
