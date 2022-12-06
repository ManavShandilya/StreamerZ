// import Image from 'next/image'
import React from 'react'
import { BsDot } from 'react-icons/bs'
import { RiMovieLine } from 'react-icons/ri'
import { rec_channels, top_channels } from '../data/mock_data'



const SideBar = () => {
  return (
    <div className='fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10]'>
      <div>
        <p className='hidden xl:flex uppercase font-bold text-sm pb-4'>Recommended Channels</p>
        <p><RiMovieLine size={20} className='xl:hidden justify-center w-full' /></p>
      </div>
   
        <div className='inline-flex items-center w-full py-[2px]'>
          <div>
            <img src="https://robohash.org/doloresblanditiisveritatis.png?size=50x50&set=set1" width='50' height='50' alt="" />
          </div>
          <div className='hidden xl:flex justify-between w-full'>
            <div>
             <p>mmooring0</p>
             <p className='text-gray-400'>Pannier</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />13K</p>
          </div>
        </div>




        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/autiderror.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>kmabbett1</p>
              <p className='text-gray-400'>Matsoft</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />2K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/expeditaestet.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>csommerling2</p>
              <p className='text-gray-400'>Y-find</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />8K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/itaqueconsequaturab.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>kleigh3</p>
              <p className='text-gray-400'>Toughjoyfax</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />33K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/explicaboaliquamrecusandae.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>cmacinerney4</p>
              <p className='text-gray-400'>Gembucket</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />6K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/rerumesseinventore.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>bleggott5</p>
              <p className='text-gray-400'>Transcof</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />21K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/debitisautminima.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>jkaplan6</p>
              <p className='text-gray-400'>Tampflex</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />43K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/reiciendisminusveniam.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>jseakings7</p>
              <p className='text-gray-400'>Toughjoyfax</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />81K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/sintcommodisit.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>hjuden8</p>
              <p className='text-gray-400'>Flexidy</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />52K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/eaametex.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>gtruitt9</p>
              <p className='text-gray-400'>Stronghold</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />51K</p>
           </div>
        </div>

      <div>
        <p className='hidden xl:flex uppercase font-bold text-sm py-4'>Top Channels</p>
        <p><RiMovieLine size={20} className='xl:hidden justify-center w-full' /></p>
      </div>

      <div className='inline-flex items-center w-full py-[2px]'>
          <div>
            <img src="https://robohash.org/doloresblanditiisveritatis.png?size=50x50&set=set1" width='50' height='50' alt="" />
          </div>
          <div className='hidden xl:flex justify-between w-full'>
            <div>
             <p>mmooring0</p>
             <p className='text-gray-400'>Pannier</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />13K</p>
          </div>
        </div>




        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/autiderror.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>kmabbett1</p>
              <p className='text-gray-400'>Matsoft</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />2K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/expeditaestet.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>csommerling2</p>
              <p className='text-gray-400'>Y-find</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />8K</p>
           </div>
        </div>

        <div className='inline-flex items-center w-full py-[2px]'>
           <div>
            <img src="https://robohash.org/itaqueconsequaturab.png?size=50x50&set=set1" width='50' height='50' alt="" />
           </div>
           <div className='hidden xl:flex justify-between w-full'>
            <div>
              <p>kleigh3</p>
              <p className='text-gray-400'>Toughjoyfax</p>
            </div>
            <p className='flex items-center'><BsDot color='red' size={40} />33K</p>
           </div>
        </div>

    </div>
  )
}

export default SideBar
