import { IconContext } from 'react-icons/lib';

interface desigIcone {
  color: string;
  size: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icone: any;
}

// icone component provider
const Icone = (datas: desigIcone) => {
  return (
    <IconContext.Provider
      value={{
        className: `${datas.color}`,
        size: `${datas.size}px`,
      }}
    >
      <div>{datas.icone}</div>
    </IconContext.Provider>
  );
};

export default Icone;
