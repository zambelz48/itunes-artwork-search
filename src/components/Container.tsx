import React from "react"

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <center>
      <div className={`flex flex-col max-w-lg min-h-screen ${className}`}>
        {children}
      </div>
    </center>
  )
}

export default Container
