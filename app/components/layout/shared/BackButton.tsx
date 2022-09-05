import {Link} from "@remix-run/react";
import VerticalCenterContainer from "~/components/layout/shared/VerticalCenterContainer";

interface BackButtonProps {
    backgroundColor?: string
}

export default function BackButton({backgroundColor = 'white'}: BackButtonProps) {

    return (
        <Link
            to={'/'}
        >
            <div
                style={{
                    backgroundColor: backgroundColor,
                    padding: '5px',
                    borderRadius: '30px',
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '60px',
                    height: '60px',
                    zIndex: 5,
                    cursor: 'pointer',
                }}
            >
                <VerticalCenterContainer>
                    <img
                        style={{
                            width: '40px',
                            height: '40px',
                            transform: 'translateX(2px)'
                        }}
                        alt={'Go back'}
                        src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/left-arrow.png?alt=media&token=3e2a60e8-f3a1-4ce7-8331-cafe7281f70e'}
                    />
                </VerticalCenterContainer>
            </div>
        </Link>

    )
}
