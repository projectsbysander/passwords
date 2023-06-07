import React, { ReactNode, MouseEvent } from 'react'

const Button = ({ ...props}: { children: ReactNode, onClick: (e: MouseEvent<HTMLElement>) => void}) => {
  return (
    <button {...props}> 
    dsfs</button>
  )
}

export default Button