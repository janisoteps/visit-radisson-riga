import VerticalCenterContainer from "~/components/layout/shared/VerticalCenterContainer";
import {useState} from "react";
import VideoPlayer from "~/components/main/video/VideoPlayer";
import PlayButton from "~/components/layout/shared/PlayButton";
import CloseButton from "~/components/layout/shared/CloseButton";
import ScrollDownButton from "~/components/layout/shared/ScrollDownButton";

interface Page3Props {
    isMobile: boolean
}

export default function Page3({isMobile}: Page3Props) {
    const [videoOpen, setVideoOpen] = useState<boolean>(false);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh'
            }}
        >
            <VerticalCenterContainer>
                <div
                    style={{
                        width: isMobile ? '95vw' : '80vw',
                        height: isMobile ? '35vh' : '80vh',
                        margin: '0 auto',
                        position: 'relative'
                    }}
                >
                    {videoOpen ? (
                        <VideoPlayer />
                    ):(
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/video-cover-2.webp?alt=media&token=953bc859-56f2-4c32-b50b-f60f0516bb03")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <VerticalCenterContainer>
                                <PlayButton
                                    onClick={() => {setVideoOpen(true)}}
                                />
                            </VerticalCenterContainer>
                        </div>
                    )}

                    {videoOpen && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                transform: 'translate(50px, -50px)'
                            }}
                        >
                            <CloseButton
                                size={40}
                                onClick={() => {setVideoOpen(false)}}
                                invert={true}
                            />
                        </div>
                    )}
                </div>
            </VerticalCenterContainer>
            {isMobile && (
                <ScrollDownButton />
            )}
        </div>
    )
}
