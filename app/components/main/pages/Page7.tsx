import {filterColors} from "~/constants/colors";

interface Page7Props {
    isHome: boolean
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
                    height: isHome ? '100%' : 'fit-content',
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
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-ridzene-logo-1.png?alt=media&token=f7f12b66-6b2f-40b8-901e-b007c8cc0452'}
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
                            fontSize: '2vw',
                            fontWeight: 600,
                            margin: '0.2vw auto',
                            color: 'white',
                            width: 'fit-content',
                            marginBottom: '2vw'
                        }}
                    >
                        Memorable moments
                    </div>
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
                                <a
                                    href={'https://www.radissonhotels.com/en-us/hotels/radisson-blu-riga-ridzene'}
                                    className={'text-sky-500 decoration-sky-500 text-decoration-line'}
                                    target={'_blank'}
                                >
                                    95 rooms and spacious suites
                                </a>
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
                    </div>
                </div>
            </div>

            <div
                style={{
                    width: '40%',
                }}
            >
                <div
                    style={{
                        height: '50%',
                        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-2.webp?alt=media&token=49da21df-83e9-465d-bd97-49f43d0253a1")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderWidth: '10px 10px 5px 10px',
                        borderColor: 'white'
                    }}
                >
                </div>
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
