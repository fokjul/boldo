import { styles } from "../style";
import { arrowR } from "../assets";

export const Button_XS = ({label, visuals}) => {
  return (
    <button type="button" className={`p-0 font-body font-bold leading-6 text-[0.75rem] rounded-[3.5rem] outline-none ${visuals}`}>
      {label}
  </button>
  )
}

export const Button_S = ({label, visuals}) => {
    return (
      <button type="button" className={`py-2 px-10 bg-white font-body font-bold leading-6 text-[1rem] rounded-[3.5rem] outline-none ${visuals}`}>
        {label}
    </button>
    )
}

export const Button_M = ({label, visuals}) => {
  const buttonStyle = `${styles.button_M} ${visuals}`;
  return (
    <button type="button" className={buttonStyle}>
        {label}
    </button>
  )
}

export const ButtonOutline = ({visuals, label}) => {
  return (
    <button type="button" className={`${styles.button_M} border-solid border-2 ${visuals}`}>
      {label}
    </button>
  )
}

export const Link = ({label}) => {
  return (
    <a className={`flex text-darkBlue font-opensans text-[1.25rem] leading-[2rem] font-bold cursor-pointer border-b-2 border-darkBlue w-[164px] h-[45px] items-center`}>
    {label}
    <img src={arrowR} className="pl-3"/>
    </a>
    
  )
}
