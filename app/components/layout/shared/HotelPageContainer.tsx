import React, {useEffect} from "react";

interface HotelPageContainerProps {
    children: React.ReactElement
}

export default function HotelPageContainer({children}: HotelPageContainerProps) {
    const hasBody = (typeof window !== 'undefined' && !!window.document && !!window.document?.body);

    useEffect(() => {
        if (hasBody) {
            window.document.body.style.overflow = "scroll";
        }
    },[hasBody]);

    return (
        <div>
            {children}
        </div>
    )
}
