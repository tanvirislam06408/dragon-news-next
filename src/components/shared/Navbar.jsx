'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userLogo from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
const Navbar = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;
    console.log(user, isPending);


    return (
        <div className='flex items-center justify-between container mx-auto pb-5 mt-5'>
            <div></div>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/career'}>Career</NavLink>
                </li>
            </ul>
            <div className="flex items-center gap-3.5">
                {
                    isPending ? <span>Loading..</span> : user ? (<div className='flex items-center gap-5'>
                    <Image src={user?.image} width={40} height={40} alt='logo avatar' />

                    <h1>Hi {user.name}</h1>  <button onClick={async () => authClient.signOut()} className='btn bg-[#403F3F] text-white'>SignOut</button></div>)
                        :

                        (<div className='flex gap-4'><Image src={userLogo} width={40} height={40} alt='logo avatar' />
                            <Link className='btn bg-[#403F3F] text-white' href={'/login'}>Login</Link></div>)
                }

            </div>
        </div>
    );
};

export default Navbar;