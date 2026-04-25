import React from 'react';
import logoImg from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center max-w-80 md:max-w-md mx-auto  mt-14 items-center space-y-3'>
            <Image src={logoImg} width={471} height={60} alt='logo'/>
            <h1 className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</h1>
            <p className='font-medium text-xl text-[#403F3F]'>{format(new Date(), "EEEE,LLLL w,yyyy")}</p>
        </div>
    );
};

export default Header;