import React from "react"

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col min-h-screen items-center justify-center ${className}`}>
      {children}
    </div>
  )
}

export default Container
