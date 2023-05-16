import React, { ButtonHTMLAttributes } from 'react'
import './Button.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  size?: string
  label: string
}

const Button: React.FC<ButtonProps> = ({ primary = false, size = 'medium', label, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary'

  return (
    <button type='button' className={`button button--${size} ${mode}`} {...props}>
      {label}
    </button>
  )
}

export default Button
