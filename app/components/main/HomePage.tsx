import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';
import Page1 from "~/components/main/pages/Page1";
import Page2 from "~/components/main/pages/Page2";
import Page3 from "~/components/main/pages/Page3";
import Page4 from "~/components/main/pages/Page4";
import Page5 from "~/components/main/pages/Page5";
import Page6 from "~/components/main/pages/Page6";
import Page7 from "~/components/main/pages/Page7";
import Page8 from "~/components/main/pages/Page8";
import {pageStyles} from '~/components/main/pages/pageStyles';
import {useState} from "react";

interface HomePageProps {
    isMobile: boolean
}

export default function HomePage({isMobile}: HomePageProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const parallaxSlides: ISlideConfig[] = [
        {
            content: <Page1 isMobile={isMobile} />,
            style: pageStyles.page1Style
        },
        {
            content: <Page2 isMobile={isMobile} />,
            style: pageStyles.page2Style
        },
        {
            content: <Page3 isMobile={isMobile} />,
            style: pageStyles.page3Style
        },
        {
            content: <Page4 isHome={true} isMobile={isMobile} />,
            style: pageStyles.page4Style
        },
        {
            content: <Page5 isHome={true} isMobile={isMobile} />,
            style: pageStyles.page5Style
        },
        {
            content: <Page6 isHome={true} isMobile={isMobile} />,
            style: pageStyles.page6Style
        },
        {
            content: <Page7 isHome={true} isMobile={isMobile} />,
            style: pageStyles.page7Style
        },
        {
            content: <Page8 isHome={true} isMobile={isMobile} />,
            style: pageStyles.page8Style
        },
    ];

    const parallaxSlidesMobile: ISlideConfig[] = [
        {
            content: <Page1 isMobile={isMobile} />,
            style: pageStyles.page1StyleMobile
        },
        {
            content: <Page2 isMobile={isMobile} />,
            style: pageStyles.page2StyleMobile
        },
        {
            content: <Page3 isMobile={isMobile} slideDownByOneSlide={slideDownByOneSlide} />,
            style: pageStyles.page3StyleMobile
        },
        {
            content: <Page4 isHome={true} isMobile={isMobile} slideDownByOneSlide={slideDownByOneSlide} />,
            style:  pageStyles.page4StyleMobile
        },
        // {
        //     content: <Page4Gallery />,
        //     style:  pageStyles.page4StyleMobile
        // },
        {
            content: <Page5 isHome={true} isMobile={isMobile} slideDownByOneSlide={slideDownByOneSlide} />,
            style: pageStyles.page5StyleMobile
        },
        // {
        //     content: <Page5Gallery />,
        //     style:  pageStyles.page5StyleMobile
        // },
        {
            content: <Page6 isHome={true} isMobile={isMobile} slideDownByOneSlide={slideDownByOneSlide} />,
            style: pageStyles.page6StyleMobile
        },
        {
            content: <Page7 isHome={true} isMobile={isMobile} slideDownByOneSlide={slideDownByOneSlide} />,
            style: pageStyles.page7StyleMobile
        },
        {
            content: <Page8 isHome={true} isMobile={isMobile} />,
            style: pageStyles.page8StyleMobile
        },
    ];

    function slideDownByOneSlide() {
        const slideCount = isMobile ? parallaxSlidesMobile.length : parallaxSlides.length;
        if (currentSlide < slideCount - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    }

    if (typeof window !== 'undefined' && !!window) {
        return (
            <PageSlides
                enableAutoScroll={true}
                transitionSpeed={1300}
                slides={isMobile ? parallaxSlidesMobile : parallaxSlides}
                parallax={{
                    offset: 0.6,
                    type: SlideParallaxType.cover
                }}
                currentSlideIndex={currentSlide}
                onChange={(newIdx) => {
                    setCurrentSlide(newIdx)
                }}
            />
        )
    } else {
        return null
    }
}
