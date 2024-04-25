import React from 'react'

interface ButtonProps {
    btnStyles: string;
    title: string;
    handleOnClick?: () => void
}

const Button = ({btnStyles, title}: ButtonProps) => {
  return (
    <button className={`${btnStyles} `}>
        {title}
    </button>
  )
}

export default Button