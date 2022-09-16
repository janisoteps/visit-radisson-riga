import {filterColors} from "~/constants/colors";
import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import BookNowButtonRadisson from "~/components/layout/shared/book/BookNowButtonRadisson";
import ScrollDownButton from "~/components/layout/shared/ScrollDownButton";

interface Page4Props {
    isHome: boolean,
    isMobile: boolean,
    slideDownByOneSlide?: () => void
}

export default function Page4({isHome, isMobile, slideDownByOneSlide}: Page4Props) {
    const innerMargin: number = 6;

    if (isMobile) {
        return (
            <div
                style={{
                    width: '100vw',
                    minHeight: '100vh',
                    height: isHome ? '100vh' : 'fit-content',
                    display: 'flex',
                    backgroundColor: `rgba(${filterColors.radissonMain.rgb}, 0.70)`,
                    flexDirection: 'column'
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        minHeight: '100%',
                        paddingBottom: '170px'
                    }}
                >
                    <div
                        style={{
                            marginTop: 0,
                            marginLeft: `${innerMargin}vw`,
                            width: `calc(100% - ${innerMargin})`,
                            height: `calc(100% - ${innerMargin})`,
                            paddingRight: '2vw'
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

                        <div
                            style={{
                                fontSize: '4.2vw',
                                fontWeight: 300,
                                color: 'white',
                            }}
                        >
                            Surrounded by centuries-old buildings, Radisson Hotel Old Town Riga invites you to stroll along picturesque cobblestone streets
                            to nearby landmarks.
                        </div>
                        <div
                            style={{
                                fontSize: '4.2vw',
                                fontWeight: 300,
                                color: 'white',
                                marginTop: '1.5vw',
                                paddingLeft: '6vw'
                            }}
                        >
                            <ul className="radisson-color-list">
                                <li>
                                    60 rooms
                                </li>
                                <li>
                                    Gym
                                </li>
                                <li>
                                    3 meeting rooms
                                </li>
                                <li>
                                    Astor restaurant
                                </li>
                            </ul>
                        </div>

                        <BookNowButtonRadisson
                            linkUrl={'https://www.radissonhotels.com/en-us/hotels/radisson-riga'}
                            isMobile={true}
                        />
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '30px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/SIMPLY-WHITE%2BDUSK-02-small.png?alt=media&token=748b4d26-0eee-488e-a4af-f51c63c0541a'}
                            alt={'Simply Delightful'}
                            style={{
                                width: '50vw',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        height: '70vh'
                    }}
                >
                    <ImageCarouselParent
                        width={'100%'}
                        height={'100%'}
                        borderWidth={'10px 5px 10px 10px'}
                        urlList={[
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/exterior-Radisson-Old-Town.webp?alt=media&token=b3955c8c-7637-4a6e-b50b-b8002a123b8b',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/radisson-Old-Town-Standard-Room-Park-View-King-4.webp?alt=media&token=0c259449-f6f0-4942-88a2-4a812b3213b1',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-interior-1.webp?alt=media&token=1ef6f34d-73dc-42cc-8efe-d4410b39ccdc',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-interior-2.webp?alt=media&token=9ac4b69b-e143-4c4e-aef2-3c395eba72b4',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-interior-3.webp?alt=media&token=7202894e-ee34-43ad-9267-fc5d70f5e672'
                        ]}
                    />
                </div>

                {isHome && (
                    <ScrollDownButton slideDownByOneSlide={slideDownByOneSlide} />
                )}
            </div>
        )
    } else {
        return (
            <div
                style={{
                    width: '100vw',
                    minHeight: '100vh',
                    height: isHome ? '100vh' : 'fit-content',
                    display: 'flex',
                    backgroundColor: `rgba(${filterColors.radissonMain.rgb}, 0.70)`,
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '55%',
                        minHeight: '100%',
                        paddingBottom: '100px'
                    }}
                >
                    <div
                        style={{
                            marginTop: 0,
                            marginLeft: `${innerMargin}vw`,
                            width: `calc(100% - ${innerMargin})`,
                            height: `calc(100% - ${innerMargin})`,
                            paddingRight: '2vw'
                        }}
                    >
                        <img
                            style={{
                                width: '20vw',
                                height: 'auto',
                                margin: '10px auto'
                            }}
                            alt={'Radisson Old Town Riga Logo'}
                            src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-logo-3.png?alt=media&token=6f8ce431-b189-4605-859d-445f1a0b1181'}
                        />

                        <div
                            style={{
                                fontSize: '1.4vw',
                                fontWeight: 300,
                                color: 'white',
                            }}
                        >
                            Surrounded by centuries-old buildings, Radisson Hotel Old Town Riga invites you to stroll along picturesque cobblestone streets to nearby landmarks like the Freedom Monument.
                        </div>
                        <div
                            style={{
                                fontSize: '1.4vw',
                                fontWeight: 300,
                                color: 'white',
                                marginTop: '1.5vw'
                            }}
                        >
                            Visiting on business? Corporate travelers appreciate our location just one kilometer from the business district and 19 minutes from Riga International Airport (RIX).
                        </div>
                        <div
                            style={{
                                fontSize: '1.4vw',
                                fontWeight: 300,
                                color: 'white',
                                marginTop: '1.5vw',
                                paddingLeft: '2vw'
                            }}
                        >
                            <ul className="radisson-color-list">
                                <li>
                                    60 rooms
                                </li>
                                <li>
                                    Gym
                                </li>
                                <li>
                                    3 meeting rooms
                                </li>
                                <li>
                                    Astor restaurant and bar
                                </li>
                            </ul>
                        </div>

                        <BookNowButtonRadisson
                            linkUrl={'https://www.radissonhotels.com/en-us/hotels/radisson-riga'}
                        />
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '30px',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/SIMPLY-WHITE%2BDUSK-02-small.png?alt=media&token=748b4d26-0eee-488e-a4af-f51c63c0541a'}
                            alt={'Simply Delightful'}
                            style={{
                                width: '15vw',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        width: '45%',
                        display: 'flex'
                    }}
                >
                    <ImageCarouselParent
                        width={'60%'}
                        height={'100%'}
                        borderWidth={'10px 5px 10px 10px'}
                        urlList={[
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/exterior-Radisson-Old-Town.webp?alt=media&token=b3955c8c-7637-4a6e-b50b-b8002a123b8b',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/radisson-Old-Town-Standard-Room-Park-View-King-4.webp?alt=media&token=0c259449-f6f0-4942-88a2-4a812b3213b1',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-interior-1.webp?alt=media&token=1ef6f34d-73dc-42cc-8efe-d4410b39ccdc',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-interior-2.webp?alt=media&token=9ac4b69b-e143-4c4e-aef2-3c395eba72b4',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-interior-3.webp?alt=media&token=7202894e-ee34-43ad-9267-fc5d70f5e672'
                        ]}
                    />

                    <div
                        style={{
                            width: '40%'
                        }}
                    >
                        <div
                            style={{
                                height: '50%',
                                backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/radisson-Old-Town-Superior-Room-Corner-1.webp?alt=media&token=2d265d9e-4e9e-4756-914a-fb0041c92594")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderWidth: '5px 10px 5px 5px',
                                borderColor: 'white'
                            }}
                        >
                        </div>
                        <div
                            style={{
                                height: '50%',
                                backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/radisson-Old-town-Lobby-and-Bar.webp?alt=media&token=5773f269-8bc6-4c37-b6bd-04aff10fcfb2")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderWidth: '5px 10px 10px 5px',
                                borderColor: 'white'
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
