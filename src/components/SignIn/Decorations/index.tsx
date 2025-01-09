// decoration component

interface cardDatas {
  width: string;
  color: string;
  positions: string;
}

const CircleDecoration = (datas: cardDatas) => {
  //
  const Width = datas.width == 'small' ? 'w-[140px]' : 'w-[180px]';
  const Height = datas.width == 'small' ? 'h-[140px]' : 'h-[180px]';

  // postion
  let position;
  switch (datas.positions) {
    case 'top': {
      position = 'right-[-80px] top-[-80px]';
      break;
    }
    case 'bottom': {
      position = 'left-[-60px] bottom-[-60px]';
      break;
    }
  }

  return (
    <div
      className={`${Width} ${Height} ${datas.color} ${position} rounded-full absolute opacity-10`}
    ></div>
  );
};

export default CircleDecoration;
