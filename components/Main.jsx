import { Head } from 'next/document'
import React from 'react'
import Categories from './Categories'
import Hero from './Hero'
import IconBar from './IconBar'
import LiveChannels from './LiveChannels'

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[230px]'>
      <Hero />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  )
}

export default Main
