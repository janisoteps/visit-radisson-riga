import {colorsConstants, filterColors} from "~/constants/colors";

interface Page4Props {

}

export default function Page4({}: Page4Props) {
    const innerMargin: number = 6;
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex'
            }}
        >
            <div
                style={{
                    width: '60%',
                    backgroundColor: `rgba(${filterColors.radissonMain.rgb}, 0.70)`
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
                            margin: '0 auto'
                        }}
                        alt={'Radisson Old Town Riga Logo'}
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/Logo-white-Radisson-BLU-Ridzene_general.png?alt=media&token=cb1a47fd-b455-49d2-99e5-5703ea049ff7'}
                    />
                    <div
                        style={{
                            fontSize: '3.5vw',
                            fontWeight: 400,
                            color: 'white',
                        }}
                    >
                        Radisson Hotel Old Town Riga
                    </div>
                    <div
                        style={{
                            fontSize: '2vw',
                            fontWeight: 400,
                            color: 'white'
                        }}
                    >
                        Simply Delightful
                    </div>

                    <div
                        style={{
                            fontSize: '1.2vw',
                            fontWeight: 400,
                            color: 'white',
                            marginTop: '3vw'
                        }}
                    >
                        Surrounded by centuries-old buildings, Radisson Hotel Old Town Riga invites you to stroll along picturesque cobblestone streets to nearby landmarks like the Freedom Monument.
                    </div>
                    <div
                        style={{
                            fontSize: '1.2vw',
                            fontWeight: 400,
                            color: 'white',
                            marginTop: '1.5vw'
                        }}
                    >
                        Visiting on business? Corporate travelers appreciate our location just one kilometer from the business district and 19 minutes from Riga International Airport (RIX).
                    </div>
                    <div
                        style={{
                            fontSize: '1.2vw',
                            fontWeight: 400,
                            color: 'white',
                            marginTop: '1.5vw',
                            paddingLeft: '2vw'
                        }}
                    >
                        <ul className="radisson-color-list">
                            <li>
                                <a
                                    href={'https://www.radissonhotels.com/en-us/hotels/radisson-riga'}
                                    className={'text-sky-800 decoration-sky-800 text-decoration-line'}
                                    target={'_blank'}
                                >
                                    60 rooms
                                </a>
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
                </div>
            </div>
            <div
                style={{
                    width: '40%',
                    display: 'flex'
                }}
            >
                <div
                    style={{
                        width: '60%',
                        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/exterior-Radisson-Old-Town.webp?alt=media&token=b3955c8c-7637-4a6e-b50b-b8002a123b8b")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderWidth: '10px 5px 10px 10px',
                        borderColor: 'white'
                    }}
                >
                </div>
                <div
                    style={{
                        width: '40%'
                    }}
                >
                    <div
                        style={{
                            height: '33%',
                            backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/radisson-Old-Town-Standard-Room-Park-View-King-4.webp?alt=media&token=0c259449-f6f0-4942-88a2-4a812b3213b1")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderWidth: '10px 10px 5px 5px',
                            borderColor: 'white'
                        }}
                    >
                    </div>
                    <div
                        style={{
                            height: '33%',
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
                            height: '34%',
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
