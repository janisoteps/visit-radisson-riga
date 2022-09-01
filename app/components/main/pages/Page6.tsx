import ImageCarouselParent from "~/components/layout/shared/carousel/ImageCarouselParent";
import BookNowButtonParkInn from "~/components/layout/shared/book/BookNowButtonParkInn";

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
                <ImageCarouselParent
                    width={'100%'}
                    height={'50%'}
                    borderWidth={'10px 10px 5px 10px'}
                    urlList={[
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-1.webp?alt=media&token=e576cad8-1096-4d72-a737-7702589dd7e7',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-2.webp?alt=media&token=76e991cd-99c7-4cf2-a3a8-4fd28fadf170',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-4.webp?alt=media&token=623d16e7-9d64-4970-81e8-64a84f98914d',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-interior-5.webp?alt=media&token=a63aea8b-2d19-4e77-a139-ddff6bf5bad2',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-interior-5.webp?alt=media&token=c4f25c83-b05f-4685-af14-38be01e5b7f7',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-interior-6.webp?alt=media&token=37463300-fc42-44ea-b8e2-1b8095f47484',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-interior-7.webp?alt=media&token=4aeb9a5b-9fae-486c-b662-1ef7a7cfbd6d',
                        'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-interior-8.webp?alt=media&token=e6339b6d-887a-4eab-bb41-3c08c748549c'
                    ]}
                />
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
                        alt={'Par Inn'}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkinn-barona-logo-1.png?alt=media&token=e6d9cc2f-d7ed-4582-af74-ce78214cad29'}
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
                            Located in the bustling city center near the historic Old Town, our Riga aparthotel offers easy access to a variety of local businesses, transport options and attractions, including the main bus and train stations. Enjoy all the comforts of a hotel along with plenty of flexibility and independence when book one of these stylish serviced apartments.
                        </div>

                        <ul
                            className="list-disc"
                            style={{
                                marginLeft: '3vw'
                            }}
                        >
                            <li>
                                78 rooms and spacious suites
                            </li>
                            <li>
                                Lounge area with upscaled wending systems
                            </li>
                            <li>
                                Learn more
                            </li>
                        </ul>

                        <BookNowButtonParkInn
                            onClick={() => {
                                window.location.href = 'https://www.radissonhotels.com/en-us/hotels/park-inn-riga-barona';
                            }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        fontSize: '1.5vw',
                        fontWeight: 400,
                        color: 'white',
                        width: '100%',
                        textAlign: 'center',
                        position: 'absolute',
                        bottom: '20px'
                    }}
                >
                    feel good
                </div>
            </div>
        </div>
    )
}
