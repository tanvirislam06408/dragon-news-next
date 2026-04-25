import LeftAside from '@/components/pages/homepage/News/LeftAside';
import RightAside from '@/components/pages/homepage/RightAside';
import NewsCard from '@/components/shared/NewsCard';
import { newsCategories, newsData } from '@/lib/data';
import React from 'react';



const News = async ({ params }) => {

  const { id } = await params;
  const newsDataByCategory = await newsData(id);
  const categories = await newsCategories();



  return (
    <div className='grid grid-cols-12 container mx-auto gap-3'>
      {/* left aside */}
      <div className=" col-span-3">
        <LeftAside isActive={id} categories={categories} />
      </div>


      {/* center */}
      <div className=" col-span-6">
        <h1 className='text-xl font-semibold text-[#403F3F] my-3'>Dragon News Home</h1>
        
        {
         newsDataByCategory.map(newsD=>{
          return <NewsCard newsD={newsD} key={newsD._id}/>
         })
        }
            </div>

            {/* right aside */ }
            <div className=" col-span-3">
              <h1 className='text-xl font-semibold text-[#403F3F] my-3'>Login With</h1>
              <RightAside />
            </div>
    </div>
      );
};

      export default News;