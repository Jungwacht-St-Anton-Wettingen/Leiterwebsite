import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts } from '@/services';

const RecentPosts = () => {

  const [recentPosts, setRecentPosts] = useState([])

  useEffect(() => {
    getRecentPosts()
        .then((result) => setRecentPosts(result))
    }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h1 className='text-blue-800 mb-8 text-4xl font-bold'>Blog</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {recentPosts.map((post) => (
                <div key={post.node.title}>
                    <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                        <div className='relative overflow-hidden shadow-md mb-6'>
                            <img 
                                src={post.node.featuredImage[0].url}
                                alt={post.node.title}
                                className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                              />
                        </div>
                        <p className='text-2xl text-blue-800 mt-5 px-3'>{moment(post.node.createdAt).format('DD.MM.YYYY')}</p>
                        <p className='text-2xl font-bold text-blue-800 px-3'>{post.node.title}</p>
                        <p className='text-2xl text-blue-800 px-3 mb-8'>{post.node.excerpt}</p>
                        <Link className='px-3' href={`/post/${post.node.slug}`}>
                            <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                                Details
                            </span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentPosts