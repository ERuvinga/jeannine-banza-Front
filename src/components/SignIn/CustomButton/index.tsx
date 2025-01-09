interface ButtonDatas {
  label: string;
  bgColor: string;
  textColor: string;
  HandleClick: () => void;
}

// icone component provider
const CustomButton = (datas: ButtonDatas) => {
  return (
    <button
      onClick={datas.HandleClick}
      className={`${datas.bgColor} ${datas.textColor} w-[100%] text-base rounded-xl shadow-md font-[sans-bold] h-[48px] transition ease-in-out duration-600  hover:opacity-85 hover:transition-all`}
    >
      {datas.label}
    </button>
  );
};

export default CustomButton;
