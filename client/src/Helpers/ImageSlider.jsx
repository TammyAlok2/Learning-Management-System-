import { useEffect, useRef, useState } from 'react';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const SliderData = [
    {
        image: 'https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2022/06/28161925/DevOps-min.gif'
    },

    {
        image:'https://proeffico.com/wp-content/uploads/2023/10/devOps-cloud-native-2.gif'
    }
    ,
    {
       image:
        'https://www.shutterstock.com/image-vector/web-development-programmer-engineering-coding-600nw-1806965104.jpg'
           
    },
    {
        image:
            'https://www.shutterstock.com/image-vector/cartoon-beard-handsome-character-casual-600nw-2174922633.jpg'
    },
    {
        image:
            'https://bridgentech.com/wp-content/uploads/2023/06/Cloud-Services.gif'
    },
    {
        image:
            'https://www.iss.nus.edu.sg/images/default-source/default-album/software-dev.jpg?Status=Master&sfvrsn=aa8aa05f_0'
    },
    {
        image:
            'https://t4.ftcdn.net/jpg/04/12/83/91/360_F_412839178_eBThjVy75lyoTMkjcaSZSgeaH91M9bse.jpg'
    },
    {
        image:
           'https://assets.zyrosite.com/Aq20eV79zLfpXV6b/colorlessbitesizedkob-size_restricted-dWxMw6VeVnhwvlpy.gif'
    }
];




// const ImageSlider =()=>{
//     const [current, setCurrent] = useState(0);
//     const length = SliderData.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1);
//     };

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1);
//     };

//     if (!Array.isArray(SliderData) || SliderData.length <= 0) {
//         return null;
//     }

//     return (
//         <section className='slider'>
//             <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
//             <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
//             {SliderData.map((slide, index) => {
//                 return (
//                     <div
//                         className={index === current ? 'slide active' : 'slide'}
//                         key={index}
//                     >
//                         {index === current && (
//                             <img src={slide.image} alt='travel image' className='image' />
//                         )}
//                     </div>
//                 );
//             })}
//         </section>
//     );
// };

// export default ImageSlider;



const delay = 7000;

function ImageSlider() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {SliderData.map((slide, index) => (
                    
                       
                         <img src={slide.image} alt='image' className='slide' key={index} />

                  
                   
                ))}
            </div>

            <div className="slideshowDots">
                {SliderData.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider