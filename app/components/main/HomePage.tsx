import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';
import Page1 from "~/components/main/pages/Page1";
import {page1Style} from "~/components/main/pages/page1Style";
import Page2 from "~/components/main/pages/Page2";
import {page2Style} from "~/components/main/pages/page2Style";
import Page3 from "~/components/main/pages/Page3";
import {page3Style} from "~/components/main/pages/page3Style";


interface HomePageProps {

}

export default function HomePage({}: HomePageProps) {
    const parallaxSlides: ISlideConfig[] = [
        {
            content: <Page1 />,
            style: page1Style
        },
        {
            content: <Page2 />,
            style: page2Style
        },
        {
            content: <Page3 />,
            style: page3Style
        },
    ];

    if (typeof window !== 'undefined' && !!window) {
        return (
            <PageSlides
                enableAutoScroll={true}
                transitionSpeed={1000}
                slides={parallaxSlides}
                parallax={{
                    offset: 0.6,
                    type: SlideParallaxType.reveal
                }}
            />
        )
    } else {
        return null
    }
}
