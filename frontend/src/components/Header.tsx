import React from 'react'
import Image from 'next/image'
import Container from './Container'
import Logo from '@/Icons/Logo'

const Header = () => {
  return (
    <>
        <div className='bg-gray-1000 p-4'>
            <Container>
                <div className='flex justify-between'>
                    <Logo title='chatapp' width={150} height={40}/>
                </div>
            </Container>
        </div> 
    </>
  )
}

export default Header
