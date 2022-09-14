import {useState} from "react";
import {Link} from "@remix-run/react";

interface Page2Props {
    isMobile: boolean
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
            <Link
                to={'/hotel/park-inn-valdemara'}
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
                        setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/RIXPV-Exterior-1.webp?alt=media&token=50d0f899-2da7-487d-9259-498a01bc6a5a')
                    }}
                    onMouseLeave={() => {
                        setPreviewImageUrl(null);
                    }}
                >
                </div>
            </Link>

            <Link
                to={'/hotel/radisson-blu-daugava'}
            >
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
                        setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/blu-daugava-exterior-1.webp?alt=media&token=27dff4cd-5260-4027-b940-f65c86fded2e')
                    }}
                    onMouseLeave={() => {
                        setPreviewImageUrl(null);
                    }}
                >
                </div>
            </Link>


            <Link
                to={'/hotel/radisson-old-town-riga'}
            >
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
                        setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/exterior-Radisson-Old-Town.webp?alt=media&token=b3955c8c-7637-4a6e-b50b-b8002a123b8b')
                    }}
                    onMouseLeave={() => {
                        setPreviewImageUrl(null);
                    }}
                >
                </div>
            </Link>

            <Link
                to={'/hotel/radisson-blu-ridzene'}
            >
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
                        setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/ridzene-blu-exterior-1.webp?alt=media&token=a9e8fdfb-e2eb-41e0-96d8-b11a56753923')
                    }}
                    onMouseLeave={() => {
                        setPreviewImageUrl(null);
                    }}
                >
                </div>
            </Link>

            <Link
                to={'/hotel/park-inn-barona'}
            >
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
                        setPreviewImageUrl('https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/barona-exterior-1.webp?alt=media&token=e940e864-10aa-450e-9d7b-fab9f7e71a8a')
                    }}
                    onMouseLeave={() => {
                        setPreviewImageUrl(null);
                    }}
                >
                </div>
            </Link>

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
