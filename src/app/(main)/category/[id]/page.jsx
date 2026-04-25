import LeftAside from '@/components/pages/homepage/News/LeftAside';
import RightAside from '@/components/pages/homepage/RightAside';
import React from 'react';

const newsData = async (categoryId) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
  const data = await res.json();
  return await data.data;
}


const newsCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return await data.data;
}

const News = async({params}) => {

const {id}=await params;
const newsDataByCategory=await newsData(id);
const categories = await newsCategories();
  console.log(newsDataByCategory);
  

    return (
        <div className='grid grid-cols-12 container mx-auto gap-3'>
      {/* left aside */}
      <div className=" col-span-3">
        <LeftAside isActive={null} categories={categories} />
      </div>


      {/* center */}
      <div className="bg-green-500 col-span-6">
        <h1 className='text-xl font-semibold text-[#403F3F] my-3'>Dragon News Home</h1>
      </div>

      {/* right aside */}
      <div className=" col-span-3">
        <h1 className='text-xl font-semibold text-[#403F3F] my-3'>Login With</h1>
        <RightAside/>
      </div>
    </div>
    );
};

export default News;