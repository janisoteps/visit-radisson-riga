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
                    src="https://player.vimeo.com/video/742585789?h=e1e05b1d98&badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479&background=1"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    className={'vimeo-iframe'}
                    title="Astor Cluster Hotel portfolio"
                >
                </iframe>
            </div>
        </div>
    )
}
