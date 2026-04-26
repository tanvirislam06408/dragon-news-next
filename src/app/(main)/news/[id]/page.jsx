import NewsCard from '@/components/shared/NewsCard';
import { newsDetailsById } from '@/lib/data';
import React from 'react';

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params
    const newsData = await newsDetailsById(id);

    return (
        <div className='max-w-4xl mx-auto'>
            {
                newsData.map(newsD => <NewsCard key={newsD._id} newsD={newsD} />)
            }
        </div>
    );
};

export default NewsDetailsPage;