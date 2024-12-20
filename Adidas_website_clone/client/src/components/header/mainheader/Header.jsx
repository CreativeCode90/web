import React from 'react'
import "./Header.css";
import Logo from './Logo';
import MenubarHeader from './menubar/MenubarHeader';
import Menuactions from './menuactions/Menuactions';
import { Helpbar } from './Helpbar';
const Header = () => {
  return (
  <header className="MainHeader">
    <Helpbar/>
    <nav className="navbar">
        <Logo/>
        <MenubarHeader/>
      <Menuactions/>
    </nav>
  </header>
  )
}

export default Header
