import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img 
          src={post.featuredImage[0].url}
          alt={post.title}
          className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1 className='text-blue-600 transition duration-700 text-center mb-6 cursor-pointer hover:text-black text-4xl font-semibold'>
          <Link href={`/post/${post.slug}`}>
            {post.title}
          </Link>
      </h1>
      <p className='text-center text-lg px-4 lg:px-20'>
        {post.excerpt}
      </p>
    </div>
  )
}

export default PostCard