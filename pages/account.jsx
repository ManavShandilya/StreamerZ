import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {FaGithub, FaGoogle} from 'react-icons/fa'




const account = () => {
 const { data: session } = useSession();


 console.log(session);
 if (session) {
   return (
     <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
       <h2 className='text-2xl font-bold mx-auto'>Welcome, {session.user.name}</h2>
       <p className='py-4 mx-auto'>Signed in as {session.user.email}</p>
       <button className='flex items-center justify-center p-3 bg-gray-600 border border-gray-600 my-2 mx-5' onClick={() => signOut()}>Sign out</button>
     </div>
   )
 }
 return (
   <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
    <h2 className='text-3xl font-bold mx-auto'>Login</h2>
    <p className='py-4 mx-auto'>Choose the account you want to sign in with.</p>
    <button className='flex items-center justify-center p-3 bg-gray-600 border border-gray-600 my-2 mx-6' onClick={() => signIn()}><FaGithub className='mr-2' />Sign in with<span className='font-bold pl-1'>Github</span></button>
    <button className='flex items-center justify-center p-3 bg-blue-600 border border-gray-600 my-2 mx-6' onClick={() => signIn()}><FaGoogle className='mr-2' />Sign in with<span className='font-bold pl-1'>Google</span></button>
   </div>
 )
}

export default account
