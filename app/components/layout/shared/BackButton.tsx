import {Link} from "@remix-run/react";

interface BackButtonProps {
}

export default function BackButton({}: BackButtonProps) {

    return (
        <Link
            to={'/'}
        >
            <img
                style={{
                    width: '40px',
                    height: '40px',
                    filter: 'invert(1)',
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    cursor: 'pointer',
                    zIndex: 2
                }}
                alt={'Go back'}
                src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/left-arrow.png?alt=media&token=3e2a60e8-f3a1-4ce7-8331-cafe7281f70e'}
            />
        </Link>

    )
}
