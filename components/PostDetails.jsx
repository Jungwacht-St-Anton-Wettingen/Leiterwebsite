import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { usePathname } from 'next/navigation';
import { getPostDetails } from '@/services'; // Passe den Pfad entsprechend an
import { ImageSlider } from '.';
import '@fortawesome/fontawesome-free/css/all.css';

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
          <div dangerouslySetInnerHTML={{ __html: postDetails.content.html }} className='text-lg lg:text-2xl mb-0'/>
          {postDetails.blogpostDownloads && (
            <div>
              <br />
              <br />
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {postDetails.blogpostDownloads.map((load) => (
                  <div key={load.name}>
                    <Link href={load.fileUrl} passHref>
                      <button className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 p-5 rounded-lg hover:shadow-lg">
                        <i className="fas fa-download mr-2"></i> {load.name}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          {postDetails.embeds.code && (
            <div>
              <br />
              <br />
              <div dangerouslySetInnerHTML={{ __html: postDetails.embeds[0].code }} className='text-lg lg:text-2xl mb-0'/>
            </div>
          )}
          {postDetails.seitenverweise[0] && (
            <div>
              <br />
              <br />
              <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
              <div>
              {postDetails.seitenverweise.map((seite) => (
                  <div key={seite.title}>
                      <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                          <div className='relative overflow-hidden shadow-md mb-6'>
                              <img 
                                  src={seite.image.url}
                                  alt={seite.title}
                                  className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                                />
                          </div>
                          <p className='text-2xl font-bold text-blue-800 px-3'>{seite.title}</p>
                          <p className='text-2xl text-blue-800 px-3 mb-8'>{seite.excerpt}</p>
                          <Link className='px-3' href={seite.siteUrl}>
                              <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                                  {seite.buttonText}
                              </span>
                          </Link>
                      </div>
                  </div>
              ))}
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
