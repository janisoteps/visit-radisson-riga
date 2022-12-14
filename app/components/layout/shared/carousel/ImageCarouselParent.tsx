import ImageCarousel from "~/components/layout/shared/carousel/ImageCarousel";
import CarouselItem from "~/components/layout/shared/carousel/CarouselItem";
import {useEffect, useRef, useState} from "react";

interface ImageCarouselParentProps {
    urlList: string[],
    borderWidth: string,
    width: string,
    height: string,
    isMobile?: boolean
}

export default function ImageCarouselParent(
    {urlList, borderWidth, width, height, isMobile = false}: ImageCarouselParentProps
) {
    const imageCarouselRef = useRef<HTMLInputElement>(null);
    const [carouselWidth, setCarouselWidth] = useState<number>(300);
    const isCurrent = !!imageCarouselRef.current;

    useEffect(() => {
        if (imageCarouselRef.current) {
            const newCarouselDims = imageCarouselRef.current.getBoundingClientRect();
            setCarouselWidth(newCarouselDims.width);
        }
    }, [isCurrent]);

    if (urlList.length > 1) {

        return (
            <div
                style={{
                    width: width,
                    height: height,
                    borderWidth: borderWidth,
                    borderColor: 'white'
                }}
                ref={imageCarouselRef}
            >
                <ImageCarousel
                    width={'100%'}
                    height={'100%'}
                    borderRadius={'0px'}
                    isMobile={isMobile}
                >
                    {urlList.map((imageUrl, idx) => {
                        return (
                            <CarouselItem
                                width={'100%'}
                                height={'100%'}
                                key={idx}
                            >
                                <div
                                    style={{
                                        backgroundImage: `url("${imageUrl}")`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: `${carouselWidth}px`,
                                        height: '100%'
                                    }}
                                >
                                </div>
                            </CarouselItem>
                        )
                    })}
                </ImageCarousel>
            </div>
        )
    } else {
        return null
    }
}
