import Link from 'next/link';
import React from 'react';

const NotFundPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold'>Not Found Page</h1>
            <Link href={'/'} className='btn btn-primary mt-3'>Back to Home</Link>
        </div>
    );
};

export default NotFundPage;