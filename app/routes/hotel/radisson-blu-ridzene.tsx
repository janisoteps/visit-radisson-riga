import Page7 from "~/components/main/pages/Page7";

export default function RadissonBluRidzene() {

    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-exterior-1.webp?alt=media&token=a9e8fdfb-e2eb-41e0-96d8-b11a56753923")',
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
                <Page7 />
            </div>
        </div>
    )
}
