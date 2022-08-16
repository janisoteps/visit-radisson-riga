interface Page6props {
    isHome: boolean
}

export default function Page6({isHome}: Page6props) {

    return (
        <div
            style={{
                width: '100vw',
                display: 'flex',
                minHeight: '100vh',
                height: isHome ? '100vh' : 'fit-content',
                backgroundColor: 'rgba(49,52,60,0.6)',
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
                        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-4.webp?alt=media&token=623d16e7-9d64-4970-81e8-64a84f98914d")',
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
                        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-3.webp?alt=media&token=af215e52-732e-4b1e-81c2-0a2ec6e0b703")',
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
                        alt={'Par Inn'}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-park-inn-logo-1.png?alt=media&token=c0f87dda-0364-4e04-ba00-7f15c9b1b9b3'}
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
                            Located in the bustling city center near the historic Old Town, our Riga aparthotel offers easy access to a variety of local businesses, transport options and attractions, including the main bus and train stations. Enjoy all the comforts of a hotel along with plenty of flexibility and independence when book one of these stylish serviced apartments.
                        </div>

                        <ul
                            className="list-disc"
                            style={{
                                marginLeft: '3vw'
                            }}
                        >
                            <li>
                                <a
                                    href={'https://www.radissonhotels.com/en-us/hotels/park-inn-riga-barona'}
                                    className={'text-sky-500 decoration-sky-500 text-decoration-line'}
                                    target={'_blank'}
                                >
                                    78 rooms and spacious suites
                                </a>
                            </li>
                            <li>
                                Lounge area with upscaled wending systems
                            </li>
                            <li>
                                <a
                                    href={'https://www.radissonhotels.com/en-us/hotels/park-inn-riga-barona'}
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
