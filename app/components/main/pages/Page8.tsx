import {filterColors} from "~/constants/colors";
import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import BookNowButtonBlu from "~/components/layout/shared/book/BookNowButtonBlu";

interface Page8Props {
    isHome: boolean,
    isMobile: boolean
}


export default function Page8({isHome, isMobile}: Page8Props) {

    if (isMobile) {
        return (
            <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    minHeight: '100vh',
                    height: isHome ? '100vh' : 'fit-content',
                    backgroundColor: `rgba(${filterColors.bluBlue.rgb},0.7)`,
                    flexDirection: 'column'
                }}
            >
                <div
                    style={{
                        width: '100%',
                        minHeight: '100%',
                        position: 'relative',
                        paddingBottom: '150px'
                    }}
                >
                    <div
                        style={{
                            width: '70%',
                            margin: '30px auto 0px auto'
                        }}
                    >
                        <img
                            alt={'Blu Daugava'}
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                            src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-logo-2.png?alt=media&token=4d47e7c3-7b57-417d-a499-8c9a0bd68090'}
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
                                color: 'white'
                            }}
                        >
                            <div
                                style={{
                                    marginBottom: '1vw'
                                }}
                            >
                                The hotel is adjacent to Riga's Old Town.
                            </div>

                            <ul
                                className="list-disc"
                                style={{
                                    marginLeft: '5vw',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}
                            >
                                <li>
                                    354 rooms and suites
                                </li>
                                <li>
                                    10 meeting rooms
                                </li>
                                <li>
                                    On-site secured parking
                                </li>
                                <li>
                                    Panorama Restaurant
                                </li>
                            </ul>

                            <BookNowButtonBlu
                                linkUrl={'https://www.radissonhotels.com/en-us/hotels/radisson-blu-riga-daugava'}
                                isMobile={true}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            fontSize: '3vw',
                            fontWeight: 300,
                            color: '#FFCB00',
                            width: '100%',
                            textAlign: 'center',
                            position: 'absolute',
                            bottom: '20px',
                            fontFamily: 'EB Garamond',
                            letterSpacing: '0.5rem'
                        }}
                    >
                        FEEL THE DIFFERENCE
                    </div>
                </div>

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
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-6.webp?alt=media&token=16d5062b-933f-48ce-a8a4-67cdc431986b',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-1.webp?alt=media&token=994e7e2e-e351-419c-a1a3-8812fdb8909d',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-2.webp?alt=media&token=10f291e6-8e6c-4184-a60f-9310d0510b8b',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-4.webp?alt=media&token=6bf66ff3-9053-4eaa-a0aa-5cdd92a7e756',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-8.webp?alt=media&token=3e5d7b93-991d-4dcc-8a2a-af5be9dc594b',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-9.webp?alt=media&token=e0316e8b-a0ce-4f7e-80e5-e72ee307f27d'
                        ]}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    minHeight: '100vh',
                    height: isHome ? '100vh' : 'fit-content',
                    backgroundColor: `rgba(${filterColors.bluBlue.rgb},0.7)`,
                }}
            >
                <div
                    style={{
                        width: '40%',
                    }}
                >
                    <ImageCarouselParent
                        width={'100%'}
                        height={'50%'}
                        borderWidth={'10px 10px 5px 10px'}
                        urlList={[
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-6.webp?alt=media&token=16d5062b-933f-48ce-a8a4-67cdc431986b',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-1.webp?alt=media&token=994e7e2e-e351-419c-a1a3-8812fdb8909d',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-2.webp?alt=media&token=10f291e6-8e6c-4184-a60f-9310d0510b8b',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-4.webp?alt=media&token=6bf66ff3-9053-4eaa-a0aa-5cdd92a7e756',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-8.webp?alt=media&token=3e5d7b93-991d-4dcc-8a2a-af5be9dc594b',
                            'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-9.webp?alt=media&token=e0316e8b-a0ce-4f7e-80e5-e72ee307f27d'
                        ]}
                    />

                    <div
                        style={{
                            height: '50%',
                            backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-3.webp?alt=media&token=5f291223-3287-4e50-8948-75e8ff231e9a")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderWidth: '5px 10px 10px 10px',
                            borderColor: 'white'
                        }}
                    >
                    </div>
                </div>

                <div
                    style={{
                        width: '60%',
                        minHeight: '100%',
                        position: 'relative'
                        // height: isHome ? '100%' : 'fit-content',
                    }}
                >
                    <div
                        style={{
                            width: '30%',
                            margin: '0 auto'
                        }}
                    >
                        <img
                            alt={'Blu Daugava'}
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                            src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-logo-2.png?alt=media&token=4d47e7c3-7b57-417d-a499-8c9a0bd68090'}
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
                                This picturesque riverside setting lies just 15 minutes from the airport and within walking distance of embassies and key business destinations. The hotel is adjacent to Riga's Old Town, where guests can visit key historical sites such as the Blackheads House, Riga Dome Cathedral, Art Museum "Riga Bourse" and Presidential Castle.
                            </div>

                            <ul
                                className="list-disc"
                                style={{
                                    marginLeft: '3vw'
                                }}
                            >
                                <li>
                                    354 rooms and suites
                                </li>
                                <li>
                                    10 meeting rooms and an Observation Deck
                                </li>
                                <li>
                                    Panorama Restaurant & Bar and Terrace
                                </li>
                                <li>
                                    On-site secured parking
                                </li>
                            </ul>

                            <BookNowButtonBlu
                                linkUrl={'https://www.radissonhotels.com/en-us/hotels/radisson-blu-riga-daugava'}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            fontSize: '1.1vw',
                            fontWeight: 300,
                            color: '#FFCB00',
                            width: '100%',
                            textAlign: 'center',
                            position: 'absolute',
                            bottom: '20px',
                            fontFamily: 'EB Garamond',
                            letterSpacing: '0.5rem'
                        }}
                    >
                        FEEL THE DIFFERENCE
                    </div>
                </div>
            </div>
        )
    }
}
