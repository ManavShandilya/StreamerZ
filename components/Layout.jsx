import React from 'react'
import Main from './Main'
import SideBar from './SideBar'

const Layout = () => {
  return (
    <div className='pt-[60px] flex w-full'>
      <SideBar />
      <Main />
    </div>
  )
}

export default Layout
