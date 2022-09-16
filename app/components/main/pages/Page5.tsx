import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import BookNowButtonParkInn from "~/components/layout/shared/book/BookNowButtonParkInn";
import ScrollDownButton from "~/components/layout/shared/ScrollDownButton";

interface Page5Props {
    isHome: boolean,
    isMobile: boolean,
    slideDownByOneSlide?: () => void
}

export default function Page5({isHome, isMobile, slideDownByOneSlide}: Page5Props) {

    if (isMobile) {
        return (
            <div
                style={{
                    width: '100vw',
                    minHeight: '100vh',
                    height: isHome ? '100vh' : 'fit-content',
                    backgroundColor: 'rgba(49,52,60,0.6)',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <div
                    style={{
                        width: '100%',
                        paddingTop: '3vw',
                        minHeight: '100%',
                        position: 'relative',
                        paddingBottom: '170px'
                    }}
                >
                    <div
                        style={{
                            width: '60%',
                            margin: '30px auto'
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

                    <div
                        style={{
                            padding: '5vw',
                            paddingTop: 0,
                            width: '100%'
                        }}
                    >
                        <div
                            style={{
                                fontSize: '4.2vw',
                                fontWeight: 300,
                                margin: '0.5vw auto',
                                color: 'white'
                            }}
                        >
                            <div
                                style={{
                                    marginBottom: '1vw'
                                }}
                            >
                                the Park Inn Riga Valdemara is just a 12-minute drive from Riga International Airport (RIX) and is 2 public transport stops from
                                the UNESCO Heritage-listed Old Town.
                            </div>

                            <ul
                                className="list-disc"
                                style={{
                                    marginLeft: '3vw'
                                }}
                            >
                                <li>
                                    178 rooms
                                </li>
                                <li>
                                    5 conference rooms (10 -300 persons)
                                </li>
                                <li>
                                    Gym
                                </li>
                                <li>
                                    Parking
                                </li>
                                <li>
                                    Bocca Buona restaurant
                                </li>
                            </ul>
                        </div>

                        <BookNowButtonParkInn
                            linkUrl={'https://www.radissonhotels.com/en-us/hotels/park-inn-riga-valdemara'}
                            isMobile={true}
                        />
                    </div>

                    <div
                        style={{
                            fontSize: '5.6vw',
                            fontWeight: 400,
                            color: '#f5b335',
                            width: '100%',
                            textAlign: 'center',
                            position: 'absolute',
                            bottom: '20px',
                            fontFamily: 'Sofia Pro'
                        }}
                    >
                        <div>
                            feel
                        </div>
                        <div
                            style={{
                                transform: 'translateY(-15px)'
                            }}
                        >
                            good
                        </div>
                    </div>
                </div>

                {!isHome && (
                    <div
                        style={{
                            width: '100%',
                            height: '70vh'
                        }}
                    >
                        <ImageCarouselParent
                            width={'100%'}
                            height={'100%'}
                            borderWidth={'10px 10px 5px 10px'}
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
                )}

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
                    backgroundColor: 'rgba(49,52,60,0.6)',
                    display: 'flex'
                }}
            >
                <div
                    style={{
                        width: '60%',
                        paddingTop: '3vw',
                        minHeight: '100%',
                        position: 'relative'
                    }}
                >
                    <div
                        style={{
                            width: '30%',
                            margin: '0 auto'
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

                    <div
                        style={{
                            padding: '5vw',
                            paddingTop: 0,
                            width: '100%'
                        }}
                    >
                        <div
                            style={{
                                fontSize: '1.4vw',
                                fontWeight: 300,
                                margin: '0.5vw auto',
                                color: 'white'
                            }}
                        >
                            <div
                                style={{
                                    marginBottom: '1vw'
                                }}
                            >
                                Located on the west bank of the Daugava River, close to the city center and many top attractions, the Park Inn Riga Valdemara is just a 12-minute drive from Riga International Airport (RIX) and is 2 public transport stops from the UNESCO Heritage-listed Old Town.
                            </div>

                            <ul
                                className="list-disc"
                                style={{
                                    marginLeft: '3vw'
                                }}
                            >
                                <li>
                                    178 rooms
                                </li>
                                <li>
                                    Ballroom that spans 305 square meters and can be divided into 3 separate meeting rooms for added flexibility, 2 break-out rooms
                                </li>
                                <li>
                                    On-site Italian concept restaurant Bocca Buona
                                </li>
                                <li>
                                    Gym
                                </li>
                                <li>
                                    Parking
                                </li>
                            </ul>
                        </div>

                        <BookNowButtonParkInn
                            linkUrl={'https://www.radissonhotels.com/en-us/hotels/park-inn-riga-valdemara'}
                        />
                    </div>

                    <div
                        style={{
                            fontSize: '1.6vw',
                            fontWeight: 400,
                            color: '#f5b335',
                            width: '100%',
                            textAlign: 'center',
                            position: 'absolute',
                            bottom: '20px',
                            fontFamily: 'Sofia Pro'
                        }}
                    >
                        <div>
                            feel
                        </div>
                        <div
                            style={{
                                transform: 'translateY(-15px)'
                            }}
                        >
                            good
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        width: '40%'
                    }}
                >
                    <ImageCarouselParent
                        width={'100%'}
                        height={'50%'}
                        borderWidth={'10px 10px 5px 10px'}
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

                    <div
                        style={{
                            height: '50%',
                            backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-6.webp?alt=media&token=6adb723c-e836-4034-a985-2452d9137cb2")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderWidth: '5px 10px 10px 10px',
                            borderColor: 'white'
                        }}
                    >
                    </div>
                </div>
            </div>
        )
    }
}
