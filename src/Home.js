import React from 'react'
import Herosection from './components/Herosection'
import Trusted from './components/Trusted'
import Services from './components/Services'

function Home() {
  return (
    <>
      <Herosection name={"Basant's Store"} />
      <Services/>
      <Trusted/>
    </>
  )
}

export default Home
