import React, {useEffect, useState} from "react";

interface ImageCarouselProps {
    children: React.ReactElement[],
    width: string,
    height: string,
    borderRadius?: string,
    isMobile?: boolean
}

export interface SlideCarousel {
    (newInx: number): void
}


export default function ImageCarousel(
    {children, width = '100%', height = '300px', borderRadius = '10px', isMobile = false}: ImageCarouselProps
) {
    const [imageShownIdx, setImageShownIdx] = useState<number>(0);

    useEffect(() => {
        const slideDelay = isMobile ? 1500 : 3000;
        const slideInterval = setInterval(() => {
            slideCarousel(imageShownIdx + 1);
        }, slideDelay);

        return () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        }
    });

    const slideCarousel: SlideCarousel = (newIdx) => {
        if (newIdx < 0) {
            newIdx = React.Children.count(children) - 1;
        } else if (newIdx > React.Children.count(children) - 1) {
            newIdx = 0;
        }

        setImageShownIdx(newIdx);
    };

    return (
        <div
            className='carousel'
            style={{
                borderRadius: borderRadius,
                height: height
            }}
        >
            <div
                className='carousel-inner'
                style={{
                    transform: `translateX(-${imageShownIdx * 100}%)`,
                    height: height
                }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: width})
                })}
            </div>
        </div>
    )
}
