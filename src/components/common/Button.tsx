import React from 'react'

interface ButtonProps {
    btnStyles: string;
    title: string;
    handleOnClick?: () => void;
    btnType: string;
}

const Button = ({btnStyles, title, btnType}: ButtonProps) => {
  return (
    <input type={btnType} className={`${btnStyles} `}/>
  )
}

export default Button