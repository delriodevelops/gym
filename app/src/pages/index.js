import Image from 'next/image'
import { GlobalContext } from './GlobalContext'
import { useContext } from 'react'


export default function Home() {
  const {user} = useContext(GlobalContext)
  return (
    <main className="flex bg-slate-800 min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>{user.username}</p>
      </div>
    </main>
  )
}
