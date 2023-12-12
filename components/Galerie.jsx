import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/de';
import { usePathname } from 'next/navigation';
import { getGalerieEintraege } from '@/services';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const Galerie = () => {
    const slug = usePathname().replace('/galerie/', '');
    const [galerieDetails, setGalerieDetails] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState({ postIndex: 0, imageIndex: 0 });
    const [lightboxOpen, setLightboxOpen] = useState(false);
    
    useEffect(() => {
        if (slug) {
          console.log(slug);
          getGalerieEintraege(slug)
              .then((result) => {
                  console.log(result); // Log the result to inspect the data structure
                  setGalerieDetails(result);
              })
            .catch((error) => console.error('Fehler beim Laden der Galerie-Details:', error));
        }
      }, [slug]);

      if (!galerieDetails || !galerieDetails.galerieEintraegeConnection.edges[0]) {
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
                <div>
                    {galerieDetails.galerieEintraegeConnection.edges.map((post, postIndex) => (
                        <div key={post.node.name}>
                            <h1 className='text-blue-800 mt-4 text-4xl lg:text-6xl font-bold'>{post.node.name}</h1>
                            <div className="mt-4">
                                {post.node.image && post.node.image.length > 0 && (
                                    <PhotoAlbum
                                        layout="rows"
                                        padding={7}
                                        photos={post.node.image.map((photo) => ({
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
                slides={galerieDetails.galerieEintraegeConnection.edges[lightboxIndex.postIndex].node.image.map((image) => ({
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

export default Galerie