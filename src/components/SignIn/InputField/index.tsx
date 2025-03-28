//types aand components
'use client';

import IconeComponent from '@/components/Icons';
import { InputFieldDatas } from '@/utils/constants/Types';
import { useEffect, useState } from 'react';

//icons
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputDatas {
  item: InputFieldDatas;
  onchange: (value: string) => void;
}

// icone component provider
const InputField = (datas: InputDatas) => {
  //State
  const [showPwd, setshowPwd] = useState(false);
  const [platformInfos, setplatformInfos] = useState('');
  useEffect(() => {
    setplatformInfos(navigator.userAgent);
  });
  return (
    <div className='w-[100%] flex flex-col space-y-2'>
      <span className='text-Brand-neutral-50 font-[sans-regular] text-sm'>
        {datas.item.label}
      </span>
      <div className='border border-1 border-Brand-neutral-600 flex rounded rounded-xl p-1'>
        <div className='bg-main-400/30 opacity-1 flex items-center justify-center w-[35px] h-[35px] rounded rounded-lg'>
          {datas.item.icon}
        </div>
        <input
          type={datas.item.protected ? (showPwd ? 'text' : 'password') : 'text'}
          onChange={(event) => datas.onchange(event.target.value)}
          className={`grow ${
            platformInfos.match(/iPhone/)
              ? 'font-[sans-light] '
              : 'font-[sans-regular] text-xs  '
          } text-Brand-neutral-100 px-2 focus:outline-none bg-transparent`}
          placeholder={datas.item.placehold}
        />
        {datas.item.protected && (
          <div
            onClick={() => setshowPwd((lastValue) => !lastValue)}
            className='opacity-1 flex items-center justify-center w-[35px] h-[35px] rounded rounded-lg'
          >
            {showPwd ? (
              <IconeComponent
                icone={<FiEye />}
                color='text-Brand-neutral-50'
                size='15'
              />
            ) : (
              <IconeComponent
                icone={<FiEyeOff />}
                color='text-Brand-neutral-50'
                size='15'
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
