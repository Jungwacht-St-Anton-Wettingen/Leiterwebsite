import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { usePathname } from 'next/navigation';
import { getPostDetails } from '@/services'; // Passe den Pfad entsprechend an
import { ImageSlider } from '.';

const PostDetails = () => {
  const pathname = usePathname();
  const slug = usePathname().replace('/post/', ''); // Extrahiere den Slug aus der URL
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    if (slug) {
      console.log(slug);
      getPostDetails(slug)
        .then((result) => setPostDetails(result))
        .catch((error) => console.error('Fehler beim Laden der Blogpost-Details:', error));
    }
  }, [slug]);

  if (!postDetails) {
    return <p>Lade...</p>;
  }

  const hasMultipleImages = postDetails.featuredImage.length > 1;

  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg p-0 pb-8 mb-8'>
        {hasMultipleImages ? (
          <ImageSlider images={postDetails.featuredImage} />
        ) : (
          <img 
            src={postDetails.featuredImage[0].url}
            alt={postDetails.title}
            className='object-top h-full w-full object-cover shadow-lg rounded-t-lg mb-5'
          />
        )}
        <div className='px-8'>
            <h1 className='text-blue-800 transition duration-700 mb-2 hover:text-blue-600 text-4xl font-bold'>{postDetails.title}</h1>
            <p className='text-2xl text-blue-800 mb-5'>{moment(postDetails.createdAt).format('DD.MM.YYYY')}</p>
            <div dangerouslySetInnerHTML={{ __html: postDetails.content.html }} className='text-2xl mb-0'/>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
