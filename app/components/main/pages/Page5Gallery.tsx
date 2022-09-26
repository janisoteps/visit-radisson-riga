import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import ScrollDownButton from "~/components/layout/shared/ScrollDownButton";
import BookNowButtonParkInn from "~/components/layout/shared/book/BookNowButtonParkInn";

interface Page5GalleryProps {
    slideDownByOneSlide?: () => void
}

export default function Page5Gallery({slideDownByOneSlide}: Page5GalleryProps) {

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
                        width: '60%',
                        margin: '50px auto'
                    }}
                >
                    <img
                        alt={'Park Inn'}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/Logo%20white%20Park%20Inn%20Valdemara_cubes%20color.png?alt=media&token=311ed985-a787-41eb-8fcd-b4babe5f83a5'}
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
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/RIXPV-Exterior-1.webp?alt=media&token=50d0f899-2da7-487d-9259-498a01bc6a5a',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-2.webp?alt=media&token=d6f6be2a-51a1-4aa5-b317-b0ce5a20d97c',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-8.webp?alt=media&token=6d2f775d-94d9-4e73-98a7-c4fb79fcfdfc',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-3.webp?alt=media&token=376811b5-d22d-45a5-b4f9-7bd1981e12e1',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-7.webp?alt=media&token=90654d28-7697-430b-ae08-6d29451a90f5',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-4.webp?alt=media&token=a8eb8854-55d1-4c04-bb50-dcc9f9609006',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-9.webp?alt=media&token=e89273d9-c5ac-4041-9498-bad53d6c4266',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-5.webp?alt=media&token=4e11f3d2-a26f-4db6-ab12-ab7a0fc7211b'
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
                    linkUrl={'https://www.radissonhotels.com/en-us/hotels/park-inn-riga-valdemara'}
                    isMobile={true}
                />
            </div>
        </div>
    )
}
