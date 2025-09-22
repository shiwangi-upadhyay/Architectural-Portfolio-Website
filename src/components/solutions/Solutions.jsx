import React from 'react'
import SolutionCard from './SolutionCard'

const Solutions = () => {
  return (
    <div className='w-full mx-auto'>
      <header>
        <h2 className="text-6xl font-light text-orange-400 text-center mb-4 tracking-wider">
        SOLUTIONS
      </h2>
      <div className="h-1 w-40 bg-orange-200 mx-auto mb-12" />
      </header>
      <SolutionCard/>
    </div>
  )
}

export default Solutions