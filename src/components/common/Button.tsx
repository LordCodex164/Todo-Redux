import { useState } from 'react'

interface ButtonProps {
    btnStyles: string;
    title: string;
    handleOnClick?: () => void;
    btnType: string;
    value: string;
    handleOnChange: (e:any) => void;
}



const Button = ({btnStyles, btnType, value, handleOnChange}: ButtonProps) => {

  return (
    <input onChange={handleOnChange} value={value} type={btnType} className={`${btnStyles} `}/>
  )
}

export default Button