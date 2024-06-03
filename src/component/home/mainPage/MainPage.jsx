import React from 'react'
import LeftBar from '../leftSide/LeftBar'
import RightBar from '../rightSide/RightBar'
import './main.css'

const MainPage = () => {
  return (
    <div>
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
