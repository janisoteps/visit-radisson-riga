import Page4 from "~/components/main/pages/Page4";
import HotelPageContainer from "~/components/layout/shared/HotelPageContainer";

export default function RadissonOldTownRiga() {

    return (
        <HotelPageContainer>
            <div>
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/old-town-mood-1.webp?alt=media&token=b45143ed-8920-45e6-bebe-3515127e8af7")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0
                    }}
                >
                </div>

                <div
                    style={{
                        width: '100%',
                        minHeight: '100vh',
                        display: 'flex',
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    <Page4 isHome={false} />
                </div>
            </div>
        </HotelPageContainer>
    )
}
