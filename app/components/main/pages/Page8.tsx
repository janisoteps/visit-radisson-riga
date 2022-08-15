import {filterColors} from "~/constants/colors";

export default function Page8() {

    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                minHeight: '100vh',
                height: 'fit-content',
                backgroundColor: `rgba(${filterColors.bluBlue.rgb},0.7)`,
            }}
        >
            <div
                style={{
                    width: '40%',
                }}
            >
                <div
                    style={{
                        height: '50%',
                        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-6.webp?alt=media&token=16d5062b-933f-48ce-a8a4-67cdc431986b")',
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
                    height: 'fit-content',
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
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-logo-1.webp?alt=media&token=5f361c2e-cad7-43b0-a545-9e6db5519ced'}
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
                            fontSize: '4vw',
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
                            This picturesque riverside setting lies just 15 minutes from the airport and within walking distance of embassies and key business destinations. The hotel is adjacent to Riga's Old Town, where guests can visit key historical sites such as the Blackheads House, Riga Dome Cathedral, Art Museum "Riga Bourse" and Presidential Castle.
                        </div>

                        <ul
                            className="list-disc"
                            style={{
                                marginLeft: '3vw'
                            }}
                        >
                            <li>
                                <a
                                    href={'https://www.radissonhotels.com/en-us/hotels/radisson-blu-riga-daugava'}
                                    className={'text-sky-500 decoration-sky-500 text-decoration-line'}
                                    target={'_blank'}
                                >
                                    354 rooms and suites
                                </a>
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
                            <li>
                                <a
                                    href={'https://www.radissonhotels.com/en-us/hotels/radisson-blu-riga-daugava'}
                                    className={'text-sky-500 decoration-sky-500 text-decoration-line'}
                                    target={'_blank'}
                                >
                                    Learn more
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
