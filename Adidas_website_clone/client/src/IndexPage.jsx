import React from 'react'
import HeaderLayout from './components/header/HeaderLayout'
import HeroSection from './components/Hero/HeroSection'

const IndexPage = () => {
  return (
   <div className="Root_indexPage_container">
      <HeaderLayout/>
      <HeroSection/>
   </div>
  )
}

export default IndexPage