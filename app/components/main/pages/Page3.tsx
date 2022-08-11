import VerticalCenterContainer from "~/components/layout/shared/VerticalCenterContainer";
import {useState} from "react";
import VideoPlayer from "~/components/main/video/VideoPlayer";
import PlayButton from "~/components/layout/shared/PlayButton";
import CloseButton from "~/components/layout/shared/CloseButton";

interface Page3Props {

}

export default function Page3({}: Page3Props) {
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
                        width: '80vw',
                        height: '80vh',
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
                                backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/video-cover-1.webp?alt=media&token=5699d56f-b9a3-42dd-9214-a0cae16d36c1")',
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
        </div>
    )
}
