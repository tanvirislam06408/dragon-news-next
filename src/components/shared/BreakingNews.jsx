import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const news = [
        {
            "id": 1,
            "title": "City Introduces AI-Powered Traffic Lights",
            "category": "Technology",
            "author": "Riya Sharma",
            "published_at": "2026-04-20T10:30:00Z",
            "views": 12450,
            "isBreaking": false
        },
        {
            "id": 2,
            "title": "Local Team Wins National Championship",
            "category": "Sports",
            "author": "Arjun Mehta",
            "published_at": "2026-04-22T15:45:00Z",
            "views": 9821,
            "isBreaking": true
        },
        {
            "id": 3,
            "title": "New Vegan Restaurant Trend Takes Over Metro Cities",
            "category": "Lifestyle",
            "author": "Neha Kapoor",
            "published_at": "2026-04-18T08:15:00Z",
            "views": 6750,
            "isBreaking": false
        },
        {
            "id": 4,
            "title": "Government Announces Renewable Energy Initiative",
            "category": "Politics",
            "author": "Vikram Singh",
            "published_at": "2026-04-23T12:00:00Z",
            "views": 15432,
            "isBreaking": true
        },
        {
            "id": 5,
            "title": "Stock Markets Hit Record Highs This Week",
            "category": "Finance",
            "author": "Ananya Desai",
            "published_at": "2026-04-21T09:20:00Z",
            "views": 11203,
            "isBreaking": false
        }
    ]


    return (
        <div className='flex gap-2.5 container mx-auto mt-4 bg-gray-300 py-3.5 px-1.5'>
            <button className='btn bg-[#D72050] text-white'>Latest</button>
            <Marquee>
                {news.map(n => <span key={n.id}>{n.title}</span>)}
            </Marquee>
        </div>
    );
};

export default BreakingNews;