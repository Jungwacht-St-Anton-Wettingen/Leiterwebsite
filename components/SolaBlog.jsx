import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/de';
import { usePathname } from 'next/navigation';
import { getSolaBlogs } from '@/services';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import 'yet-another-react-lightbox/plugins/thumbnails.css';



const SolaBlog = () => {
    const pathname = usePathname();
    const slug = usePathname().replace('/lager/', '');
    const [postDetails, setPostDetails] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState({ postIndex: 0, imageIndex: 0 });
    const [lightboxOpen, setLightboxOpen] = useState(false);
  
    useEffect(() => {
      if (slug) {
        console.log(slug);
        getSolaBlogs(slug)
            .then((result) => {
                console.log(result); // Log the result to inspect the data structure
                setPostDetails(result);
            })
          .catch((error) => console.error('Fehler beim Laden der Blogpost-Details:', error));
      }
    }, [slug]);
  
    if (!postDetails || !postDetails.solaBlogsConnection.edges[0]) {
        return(
            <div className="flex items-center justify-center h-screen">
              <div className="bg-white shadow-lg rounded-xl p-8">
                <div className="flex">
                  <img src="../404.jpg" alt="404 Icon" className="mr-4 h-20 w-20" />
                  <div>
                    <h1 className="text-2xl font-bold mb-2">Huch?</h1>
                    <p>Wir konnten diese Seite leider nicht finden</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
      
    const openLightbox = (postIndex, imageIndex) => {
        setLightboxIndex({ postIndex, imageIndex });
        setLightboxOpen(true);
    };
    
      const closeLightbox = () => {
        setLightboxOpen(false);
      };

  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
        <div className='bg-white shadow-lg rounded-lg p-0 pb-8 mb-8'>
            <div className='p-8'>
                <h1 className='text-blue-800 mt-4 text-4xl lg:text-6xl font-bold'>{postDetails.lager.name}</h1>
                {postDetails.lager.motto && 
                    <h1 className="text-3xl text-blue-400 mb-0">{postDetails.lager.motto}</h1>
                }
                <div>
                    {postDetails.solaBlogsConnection.edges.map((post, postIndex) => (
                        <div key={post.node.datum[0]}>
                            <br />
                            <h1 className='text-blue-800 mt-4 text-4xl lg:text-4xl font-bold'>
                                {post.node.datum.map(date => moment(date).locale('de').format('dddd, D. MMMM')).join(' und ')}
                            </h1>
                            <h1 className="text-3xl font-semibold text-blue-400 mb-0">{post.node.untertitel}</h1>
                            <br />
                            <div dangerouslySetInnerHTML={{ __html: post.node.content.html }} className='text-lg lg:text-2xl mb-0'/>
                            <br />
                            <div className="mt-4">
                                {post.node.featuredImage && post.node.featuredImage.length > 0 && (
                                    <PhotoAlbum
                                        layout="rows"
                                        padding={7}
                                        photos={post.node.featuredImage.map((photo) => ({
                                            src: photo.url,
                                            width: photo.width,
                                            height: photo.height,
                                        }))}
                                        onClick={({ index }) => openLightbox(postIndex, index)}
                                        renderImage={({ index, photo }) => (
                                            <img
                                                key={index}
                                                src={photo.src}
                                                alt={`Image ${index}`}
                                                className="w-full h-auto cursor-pointer shadow-xl"
                                            />
                                        )}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {lightboxOpen && (
            <Lightbox
                plugins={[Thumbnails, Zoom]}
                open={lightboxOpen}
                close={closeLightbox}
                index={lightboxIndex.imageIndex}
                slides={postDetails.solaBlogsConnection.edges[lightboxIndex.postIndex].node.featuredImage.map((image) => ({
                    src: image.url,
                }))}
                on={{
                    view: ({ index }) => {
                        setLightboxIndex({ ...lightboxIndex, imageIndex: index });
                    },
                }}
                thumbnails={{
                    ref: null, // Thumbnails ref should be managed separately if needed
                    position: 'bottom',
                    width: 120,
                    height: 80,
                    border: 1,
                    borderRadius: 4,
                    padding: 4,
                    gap: 16,
                    imageFit: 'contain',
                    vignette: true,
                    showToggle: false, // You can customize this based on your preference
                }}
            />
        )}

    </div>
  )
}

export default SolaBlog