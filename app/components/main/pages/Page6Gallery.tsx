import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import ScrollDownButton from "~/components/layout/shared/ScrollDownButton";
import BookNowButtonParkInn from "~/components/layout/shared/book/BookNowButtonParkInn";

interface Page6GalleryProps {
    slideDownByOneSlide?: () => void
}

export default function Page6Gallery({slideDownByOneSlide}: Page6GalleryProps) {

    return (
        <div
            style={{
                width: '100vw',
                minHeight: '100vh',
                height: '100vh',
                backgroundColor: 'rgba(49,52,60,0.6)',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '35vh'
                }}
            >
                <div
                    style={{
                        width: '70%',
                        margin: '40px auto'
                    }}
                >
                    <img
                        alt={'Par Inn'}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-logo-1.png?alt=media&token=e6d9cc2f-d7ed-4582-af74-ce78214cad29'}
                    />
                </div>
            </div>
            <div
                style={{
                    width: '100%',
                    height: '65vh'
                }}
            >
                <ImageCarouselParent
                    isMobile={true}
                    width={'100%'}
                    height={'100%'}
                    borderWidth={'5px'}
                    urlList={[
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-1.webp?alt=media&token=e576cad8-1096-4d72-a737-7702589dd7e7',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-2.webp?alt=media&token=76e991cd-99c7-4cf2-a3a8-4fd28fadf170',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-4.webp?alt=media&token=623d16e7-9d64-4970-81e8-64a84f98914d',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-5.webp?alt=media&token=a63aea8b-2d19-4e77-a139-ddff6bf5bad2',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-interior-5.webp?alt=media&token=c4f25c83-b05f-4685-af14-38be01e5b7f7',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-interior-6.webp?alt=media&token=37463300-fc42-44ea-b8e2-1b8095f47484',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-interior-7.webp?alt=media&token=4aeb9a5b-9fae-486c-b662-1ef7a7cfbd6d',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-interior-8.webp?alt=media&token=e6339b6d-887a-4eab-bb41-3c08c748549c'
                    ]}
                />
            </div>

            <ScrollDownButton slideDownByOneSlide={slideDownByOneSlide} />

            <div
                style={{
                    position: 'absolute',
                    width: '200px',
                    bottom: '20px',
                    left: '20px'
                }}
            >
                <BookNowButtonParkInn
                    linkUrl={'https://www.radissonhotels.com/en-us/hotels/park-inn-riga-barona'}
                    isMobile={true}
                />
            </div>
        </div>
    )
}
