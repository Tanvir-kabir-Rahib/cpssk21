import Image from 'next/image'
import React from 'react'
import logo from '@/public/expired_but_continues.png'
import { HomeIcon, LucideMessageCircleMore, SearchIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'

function Header() {
    return (
        <div className='flex items-center p-2 max-w-6xl mx-auto'>
            <Image
                className='rounded-lg'
                src={logo}
                width={40}
                height={40}
                alt='logo'
            />
            <div className='flex-1'>
                <form className='flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96'>
                    <SearchIcon className='h-4 text-gray-600'></SearchIcon>
                    <input
                        type='text'
                        placeholder='Search'
                        className='bg-transparent flex-1 outline-none'
                    />
                </form>
            </div>
            <div className='flex items-center space-x-4 px-6'>
                <Link href={''} className='icon'>
                    <HomeIcon className='h-5' />
                    <p>Home</p>
                </Link>
                <Link href={''} className='icon'>
                    <UsersIcon className='h-5' />
                    <p>Friends</p>
                </Link>
                <Link href={''} className='icon hidden md:flex'>
                    <LucideMessageCircleMore className='h-5' />
                    <p>Message</p>
                </Link>
            </div>
        </div>
    )
}

export default Header