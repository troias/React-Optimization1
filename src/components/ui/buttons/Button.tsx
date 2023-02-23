import React from "react"
import { useState, useCallback } from "react"


type ButtonProps = {
  onClick: () => void,
  type?: "button" | "submit" | "reset",
  className?: string,
  disabled?: boolean,
  children: React.ReactNode,
}

const Button = ({
  onClick,
  type = "button",
  className,
  disabled,
  children,
}: ButtonProps) => {
  const [allowToggle, setAllowToggle] = useState(false)
  const [show, setShow] = useState(false)

  const buttonHandler = useCallback(() => {
    if (allowToggle) {
      setShow((prevState) => !prevState)
    }
    onClick()
  }, [allowToggle, onClick])

  return (
    <button
      type={type}
      className={``}
      onClick={buttonHandler}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default React.memo(Button)