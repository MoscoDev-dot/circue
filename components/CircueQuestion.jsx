import React from 'react'
import CircueAccordion from './CircueAccordion'

const CircueQuestion = () => {
  return (
    <div className='md:pt-90 pt-50 overflow-x-hidden'>
      <div className="grid md:grid-cols-2 grid-col-1  gap-4">
        <div>
            <p className='font-black mb-10 md:mb-0 text-5xl'>Your questions, <br /> answered.</p>
        </div>
        <div>
            <CircueAccordion/>
        </div>
      </div>
    </div>
  )
}

export default CircueQuestion
