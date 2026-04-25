import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userLogo from '@/assets/user.png'
const Navbar = () => {
    return (
        <div className='flex items-center justify-between container mx-auto mt-5'>
            <div></div>
            <ul className='flex items-center gap-3'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/career'}>Career</Link>
                </li>
            </ul>
            <div className="flex items-center gap-3.5">
                <Image src={userLogo} width={40} height={40} alt='logo avatar'/>
                <Link className='btn bg-[#403F3F] text-white' href={'/login'}>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;