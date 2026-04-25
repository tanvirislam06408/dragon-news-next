import Image from 'next/image';
import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { FaShareFromSquare } from 'react-icons/fa6';

const NewsCard = ({newsD}) => {
    const {title,_id,author,thumbnail_url,image_url,details}=newsD;
    return (
        <div className='mt-6 border p-3 border-gray-300'>
            <div className='flex items-center justify-between bg-[#F3F3F3] p-2.5'>
                <div className="flex items-center gap-3">
                <Image src={author.img} width={40} height={40} alt='card avatar'/>
                    <div className="">
                        <h1 className='text-[16px] font-semibold'>{author.name}</h1>
                    <p className='text-gray-500 text-sm'>{author.published_date}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-2xl"><FaRegBookmark /> <FaShareFromSquare /></div>
            </div>

        <h1 className='text-xl font-bold my-5'>{title}</h1>
            <Image className='w-auto  h-[400px]' src={image_url} width={400} height={400} alt='news card'/>
            <p className=' mt-3 text-[16px] text-gray-500'>{details.slice(1,200)}...</p>
            <button className='btn text-orange-500 btn-outline'>Read More</button>
        </div>
    );
};

export default NewsCard;