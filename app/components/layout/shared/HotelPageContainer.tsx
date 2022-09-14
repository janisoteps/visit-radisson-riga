import React, {useEffect} from "react";
import BackButton from "~/components/layout/shared/BackButton";

interface HotelPageContainerProps {
    children: React.ReactElement,
    isMobile: boolean
}

export default function HotelPageContainer({children, isMobile}: HotelPageContainerProps) {
    const hasBody = (typeof window !== 'undefined' && !!window.document && !!window.document?.body);

    useEffect(() => {
        if (hasBody) {
            window.document.body.style.overflow = "scroll";
        }
    },[hasBody]);

    return (
        <div>
            <BackButton isMobile={isMobile} />

            {children}
        </div>
    )
}
