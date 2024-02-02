import React, { ReactNode } from 'react'

const Container = ({children}: {children: ReactNode}) => {
  return (
    <div className='px-4 max-w-7xl mx-auto'>
      {children}
    </div>
  )
}

export default Container
