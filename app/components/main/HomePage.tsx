import {ISlideConfig, PageSlides, SlideParallaxType} from 'react-page-slides';
import Page1 from "~/components/main/pages/Page1";
import {page1Style} from "~/components/main/pages/page1Style";
import Page2 from "~/components/main/pages/Page2";
import {page2Style} from "~/components/main/pages/page2Style";
import Page3 from "~/components/main/pages/Page3";
import {page3Style} from "~/components/main/pages/page3Style";
import Page4 from "~/components/main/pages/Page4";
import {page4Style} from "~/components/main/pages/page4Style";
import Page5 from "~/components/main/pages/Page5";
import {page5Style} from "~/components/main/pages/page5Style";
import Page6 from "~/components/main/pages/Page6";
import {page6Style} from "~/components/main/pages/page6Style";


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
        {
            content: <Page4 />,
            style: page4Style
        },
        {
            content: <Page5 />,
            style: page5Style
        },
        {
            content: <Page6 />,
            style: page6Style
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
