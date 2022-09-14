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

interface HomePageProps {
    isMobile: boolean
}

export default function HomePage({isMobile}: HomePageProps) {
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

    if (typeof window !== 'undefined' && !!window) {
        return (
            <PageSlides
                enableAutoScroll={true}
                transitionSpeed={1300}
                slides={parallaxSlides}
                parallax={{
                    offset: 0.6,
                    type: SlideParallaxType.cover
                }}
            />
        )
    } else {
        return null
    }
}
