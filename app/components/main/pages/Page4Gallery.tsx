import {filterColors} from "~/constants/colors";
import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import ScrollDownButton from "~/components/layout/shared/ScrollDownButton";
import BookNowButtonRadisson from "~/components/layout/shared/book/BookNowButtonRadisson";

interface Page4GalleryProps {
    slideDownByOneSlide?: () => void
}

export default function Page4Gallery({slideDownByOneSlide}: Page4GalleryProps) {

    return (
        <div
            style={{
                width: '100vw',
                minHeight: '100vh',
                height: '100vh',
                display: 'flex',
                backgroundColor: `rgba(${filterColors.radissonMain.rgb}, 0.70)`,
                flexDirection: 'column'
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '35vh'
                }}
            >
                <img
                    style={{
                        width: '60%',
                        height: 'auto',
                        margin: '30px auto'
                    }}
                    alt={'Radisson Old Town Riga Logo'}
                    src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-logo-3.png?alt=media&token=6f8ce431-b189-4605-859d-445f1a0b1181'}
                />
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    height: '65vh'
                }}
            >
                <ImageCarouselParent
                    width={'100%'}
                    height={'100%'}
                    borderWidth={'5px'}
                    urlList={[
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/exterior-Radisson-Old-Town.webp?alt=media&token=b3955c8c-7637-4a6e-b50b-b8002a123b8b',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/radisson-Old-Town-Standard-Room-Park-View-King-4.webp?alt=media&token=0c259449-f6f0-4942-88a2-4a812b3213b1',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-interior-1.webp?alt=media&token=1ef6f34d-73dc-42cc-8efe-d4410b39ccdc',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-interior-2.webp?alt=media&token=9ac4b69b-e143-4c4e-aef2-3c395eba72b4',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-interior-3.webp?alt=media&token=7202894e-ee34-43ad-9267-fc5d70f5e672'
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
                <BookNowButtonRadisson
                    linkUrl={'https://www.radissonhotels.com/en-us/hotels/radisson-riga'}
                    isMobile={true}
                />
            </div>
        </div>
    )
}
