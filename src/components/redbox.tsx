import React from 'react'

function Redbox({text, textColor}: any) {
  return (
    <div className='flex items-center gap-4' >

        <div className='w-5 h-10 bg-red-500 rounded '></div>
        <span className={`text-[16px] text-${textColor}-500 font-semibold`}>{text}</span>

    </div>
  )
}

export default Redbox