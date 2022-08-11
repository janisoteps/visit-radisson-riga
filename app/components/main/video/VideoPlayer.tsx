interface VideoPlayerProps {

}

export default function VideoPlayer({}: VideoPlayerProps) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%'
            }}
        >
            <div className={'vimeo-container'}>
                <iframe
                    src="https://player.vimeo.com/video/738517231?h=2a4bd6e0b8&badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479&background=1"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    className={'vimeo-iframe'}
                    title="radisson-riga-1.mp4"
                >
                </iframe>
            </div>
            {/*<script src="https://player.vimeo.com/api/player.js"></script>*/}
        </div>
    )
}
