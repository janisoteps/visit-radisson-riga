interface Page5Props {
    isHome: boolean
}

export default function Page5({isHome}: Page5Props) {

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
                            fontSize: '2vw',
                            fontWeight: 600,
                            margin: '0.2vw auto',
                            color: 'white',
                            width: 'fit-content'
                        }}
                    >
                        feel good
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
                            Located on the west bank of the Daugava River, close to the city center and many top attractions, the Park Inn Riga Valdemara is just a 12-minute drive from Riga International Airport (RIX) and is 2 public transport stops from the UNESCO Heritage-listed Old Town.
                        </div>

                        <ul
                            className="list-disc"
                            style={{
                                marginLeft: '3vw'
                            }}
                        >
                            <li>
                                <a
                                    href={'https://www.radissonhotels.com/en-us/hotels/park-inn-riga-valdemara'}
                                    className={'text-sky-500 decoration-sky-500 text-decoration-line'}
                                    target={'_blank'}
                                >
                                    178 rooms
                                </a>
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
                </div>
            </div>

            <div
                style={{
                    width: '40%'
                }}
            >
                <div
                    style={{
                        height: '50%',
                        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/RIXPV-Exterior-1.webp?alt=media&token=50d0f899-2da7-487d-9259-498a01bc6a5a")',
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
