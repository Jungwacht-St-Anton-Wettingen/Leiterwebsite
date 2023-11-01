import {React, useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

function ImageSlider({ images }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

  return (
    <div className='max-w-[1400px] h-[390px] lg:h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div style={{backgroundImage: `url(${images[currentIndex].url})`}} className='w-full h-full rounded-lg bg-center bg-cover duration-500'></div>
        <div>
            <BsChevronCompactLeft onClick={prevSlide} size={50} className='hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-25%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'/>
        </div>
        <div>
            <BsChevronCompactRight onClick={nextSlide} size={50} className='hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-25%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {images.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider