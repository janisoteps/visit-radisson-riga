import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import ScrollDownButton from "~/components/layout/shared/ScrollDownButton";
import BookNowButtonBlu from "~/components/layout/shared/book/BookNowButtonBlu";

interface Page8GalleryProps {
    slideDownByOneSlide?: () => void
}

export default function Page8Gallery({slideDownByOneSlide}: Page8GalleryProps) {

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
                        alt={'Blu Daugava'}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-logo-3.webp?alt=media&token=048be708-a69a-4dac-a048-6f2adf7580e3'}
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
                    width={'100%'}
                    height={'100%'}
                    borderWidth={'5px'}
                    urlList={[
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-6.webp?alt=media&token=16d5062b-933f-48ce-a8a4-67cdc431986b',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-1.webp?alt=media&token=994e7e2e-e351-419c-a1a3-8812fdb8909d',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-2.webp?alt=media&token=10f291e6-8e6c-4184-a60f-9310d0510b8b',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-4.webp?alt=media&token=6bf66ff3-9053-4eaa-a0aa-5cdd92a7e756',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-8.webp?alt=media&token=3e5d7b93-991d-4dcc-8a2a-af5be9dc594b',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-9.webp?alt=media&token=e0316e8b-a0ce-4f7e-80e5-e72ee307f27d'
                    ]}
                />
            </div>

            <div
                style={{
                    position: 'absolute',
                    width: '200px',
                    bottom: '20px',
                    left: '20px'
                }}
            >
                <BookNowButtonBlu
                    linkUrl={'https://www.radissonhotels.com/en-us/hotels/radisson-blu-riga-daugava'}
                    isMobile={true}
                />
            </div>
        </div>
    )
}
