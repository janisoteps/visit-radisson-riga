import React from "react";

interface CarouselItemProps {
    children: React.ReactElement,
    width: string,
    height: string
}

export default function CarouselItem(
    {children, width, height = '300px'}: CarouselItemProps
) {

    return (
        <div
            className='carousel-item'
            style={{
                width: width,
                height: height
            }}
        >
            {children}
        </div>
    )
}
