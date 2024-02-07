import React from 'react'

const CenterContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <div className='w-full max-w-[100rem] mx-auto px-[7%] py-5 h-[inherit] '>
            {children}
        </div>
    </>
  )
}

export default CenterContainer