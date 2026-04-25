import Link from 'next/link';
import React from 'react';

const LeftAside = ({categories,isActive}) => {
    return (
        <div>
            <h1 className='text-xl font-semibold text-[#403F3F] my-3'>All Category</h1>

            <div className='flex flex-col gap-3'>
                {
                    categories.news_category.map(cate => {
                        return <Link href={`/category/${cate.category_id}`} className={`btn ${isActive === cate.category_id ? 'bg-slate-200' : 'bg-white'}  text-xl font-medium text-gray-500`} key={cate.category_id}>{cate.category_name}</Link>
                    })
                }
            </div>
        </div>
    );
};

export default LeftAside;