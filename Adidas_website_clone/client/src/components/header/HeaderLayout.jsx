import React from 'react'
import './style.css'
import OfferHeaderBar from './offerHeader/OfferHeaderBar'
import Header from './mainheader/Header'
import { ResponsiveHeader } from './responsiveHeader/ResponsiveHeader'
const HeaderLayout = () => {
  return (
    <div className="HeaderLayout">
        <OfferHeaderBar/>
        <Header/>
        <ResponsiveHeader/>
    </div>
  )
}

export default HeaderLayout