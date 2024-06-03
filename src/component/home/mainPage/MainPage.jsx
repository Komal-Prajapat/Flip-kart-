import React from 'react'
import LeftBar from '../leftSide/LeftBar'
import RightBar from '../rightSide/RightBar'
import './main.css'
import Navbar2 from '../../navbar2/Navbar2'

const MainPage = () => {
  return (
    <div>
    <Navbar2></Navbar2>
      <div className='home-container'>
        <div className='left-bar'>
          <LeftBar />
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default MainPage
