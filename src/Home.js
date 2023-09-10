import React from 'react'
import Herosection from './components/Herosection'
import Trusted from './components/Trusted'
import Services from './components/Services'
import FeatureProducts from './components/FeatureProducts'

function Home() {
  return (
    <>
      <Herosection name={"Basant's Store"} />
      <FeatureProducts/>
      <Services/>
      <Trusted/>
    </>
  )
}

export default Home
