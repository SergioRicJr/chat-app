import React from 'react'

interface IButton {
    title: string,
    type: 'submit' | 'button' | 'reset'
}

const Button = ({title, type}: IButton) => {
  return (
    <button className='bg-primary w-full text-black font-medium rounded-md py-2' type={type}>
        <span>{title}</span>
    </button>
  )
}

export default Button
