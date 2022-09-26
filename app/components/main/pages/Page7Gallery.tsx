import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import ScrollDownButton from "~/components/layout/shared/ScrollDownButton";
import BookNowButtonBlu from "~/components/layout/shared/book/BookNowButtonBlu";

interface Page7GalleryProps {
    slideDownByOneSlide?: () => void
}

export default function Page7Gallery({slideDownByOneSlide}: Page7GalleryProps) {

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
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-ridzene-logo-3s.webp?alt=media&token=b74ac624-49d5-4cb9-bffa-fa320c22a378'}
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
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-2.webp?alt=media&token=49da21df-83e9-465d-bd97-49f43d0253a1',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-1.webp?alt=media&token=8fe55e37-8899-4cbd-82f8-b243b2c681da',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-4.webp?alt=media&token=45b67481-1c51-4e43-886e-a12da3a2f1c2',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-5.webp?alt=media&token=f9962277-feed-4053-904f-9c5051c6fc40',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-6.webp?alt=media&token=28b88456-93ad-4078-87c6-a45f623e2fe7',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-7.webp?alt=media&token=ab0bb878-8f44-4246-9a7d-b03bbb7d536a',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-8.webp?alt=media&token=830ec758-48bc-4b7e-8a1a-2bac91784b3c',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-9.webp?alt=media&token=b4ed3fef-2a6f-41ce-9478-5e146d7d5f45'
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
                <BookNowButtonBlu
                    linkUrl={'https://www.radissonhotels.com/en-us/hotels/radisson-blu-riga-ridzene'}
                    isMobile={true}
                />
            </div>
        </div>
    )
}
