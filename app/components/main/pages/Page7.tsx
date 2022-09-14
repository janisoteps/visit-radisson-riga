import {filterColors} from "~/constants/colors";
import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import BookNowButtonBlu from "~/components/layout/shared/book/BookNowButtonBlu";

interface Page7Props {
    isHome: boolean,
    isMobile: boolean
}


export default function Page7({isHome}: Page7Props) {

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
                    width: '60%',
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
                        alt={'Par Inn'}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-ridzene-logo-2.png?alt=media&token=4f8d3911-6234-47e7-a50b-f9aa5c748cef'}
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
                            Situated between two beautiful parks in the center of Riga, the Radisson Blu Ridzene Hotel is conveniently close to main attractions, such as the Latvian National Opera and Riga's Old Town—a UNESCO World Heritage site. Stroll down the city center to take in the sophisticated architectural heritage of this beautiful city. Choice of demanding ones.
                        </div>

                        <ul
                            className="list-disc"
                            style={{
                                marginLeft: '3vw'
                            }}
                        >
                            <li>
                                95 rooms and spacious suites
                            </li>
                            <li>
                                Piramida restaurant - the perfect venue for events, and weddings with a separate entrance
                            </li>
                            <li>
                                7 meeting rooms – 90 single room seating
                            </li>
                            <li>
                                Fitness center with sauna
                            </li>
                            <li>
                                Underground parking
                            </li>
                        </ul>

                        <BookNowButtonBlu
                            linkUrl={'https://www.radissonhotels.com/en-us/hotels/radisson-blu-riga-ridzene'}
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
                <div
                    style={{
                        height: '50%',
                        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-3.webp?alt=media&token=1498ad32-8230-410a-a30c-636a5a420287")',
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
