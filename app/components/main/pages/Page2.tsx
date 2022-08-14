import {useState} from "react";

interface Page2Props {

}

export default function Page2({}: Page2Props) {
    const [previewImageUrl, setPreviewImageUrl] = useState<null | string>(null);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'relative'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/map-park-inn-valdemara.png?alt=media&token=bff8a9fe-f9a6-40f6-8d33-017ebe798354")',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    top: '22vw',
                    left: '9vw',
                    height: '9vw',
                    width: '7vw',
                    cursor: 'pointer'
                }}
                className={'scale-90 hover:scale-100 ease-in-out duration-300'}
                onMouseEnter={() => {
                    setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-1.webp?alt=media&token=d55c925b-cae0-4c4d-81c3-e9f53d09ffa3')
                }}
                onMouseLeave={() => {
                    setPreviewImageUrl(null);
                }}
            >
            </div>

            <div
                style={{
                    position: 'absolute',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/map-blu-daugava.png?alt=media&token=2014f0c9-455d-4f30-8109-584fe3586289")',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    top: '31vw',
                    left: '19vw',
                    height: '9vw',
                    width: '7vw',
                    cursor: 'pointer'
                }}
                className={'scale-90 hover:scale-100 ease-in-out duration-300'}
                onMouseEnter={() => {
                    setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-interior-3.webp?alt=media&token=5f291223-3287-4e50-8948-75e8ff231e9a')
                }}
                onMouseLeave={() => {
                    setPreviewImageUrl(null);
                }}
            >
            </div>
            
            <div
                style={{
                    position: 'absolute',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/map-old-town.png?alt=media&token=c30cec74-db8a-476f-a49a-ac8e665b9837")',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    top: '15vw',
                    left: '37vw',
                    height: '9vw',
                    width: '7vw',
                    cursor: 'pointer'
                }}
                className={'scale-90 hover:scale-100 ease-in-out duration-300'}
                onMouseEnter={() => {
                    setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/radisson-Old-town-Lobby-and-Bar.webp?alt=media&token=5773f269-8bc6-4c37-b6bd-04aff10fcfb2')
                }}
                onMouseLeave={() => {
                    setPreviewImageUrl(null);
                }}
            >
            </div>

            <div
                style={{
                    position: 'absolute',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/map-blu-ridzene.png?alt=media&token=59729be6-600d-4253-b2f7-bd8b035e0b7f")',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    top: '12vw',
                    left: '45vw',
                    height: '9vw',
                    width: '7vw',
                    cursor: 'pointer'
                }}
                className={'scale-90 hover:scale-100 ease-in-out duration-300'}
                onMouseEnter={() => {
                    setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-interior-3.webp?alt=media&token=1498ad32-8230-410a-a30c-636a5a420287')
                }}
                onMouseLeave={() => {
                    setPreviewImageUrl(null);
                }}
            >
            </div>

            <div
                style={{
                    position: 'absolute',
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/map-park-inn-barona.png?alt=media&token=8b88a6d4-8c06-4eb4-ae34-1ef4a4e7d434")',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    top: '8vw',
                    left: '61vw',
                    height: '9vw',
                    width: '7vw',
                    cursor: 'pointer'
                }}
                className={'scale-90 hover:scale-100 ease-in-out duration-300'}
                onMouseEnter={() => {
                    setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/parkInn_Barona_One-Bedroom-Apartment-Bedroom-3.webp?alt=media&token=55983d36-ff01-4a35-872b-986b4f3971a8')
                }}
                onMouseLeave={() => {
                    setPreviewImageUrl(null);
                }}
            >
            </div>

            {!!previewImageUrl && (
                <img
                    style={{
                        width: '35vw',
                        height: 'auto',
                        position: 'absolute',
                        bottom: '20px',
                        right: '20px',
                    }}
                    className={'entrance-fade-move'}
                    src={previewImageUrl}
                    alt={'Radisson hotel preview'}
                />
            )}
        </div>
    )
}
