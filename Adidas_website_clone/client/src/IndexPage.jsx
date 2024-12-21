import React from 'react'
import HeaderLayout from './components/header/HeaderLayout'
import HeroLayout from './components/Hero/HeroLayout'

const IndexPage = () => {
  return (
   <div className="Root_indexPage_container">
      <HeaderLayout/>
      <HeroLayout/>
   </div>
  )
}

export default IndexPage