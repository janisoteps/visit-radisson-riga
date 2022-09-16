import VerticalCenterContainer from "~/components/layout/shared/VerticalCenterContainer";

interface BookNowButtonProps {
    linkUrl: string,
    title?: string,
    margin?: string,
    isMobile?: boolean
}

export default function BookNowButtonParkInn(
    {
        linkUrl,
        title = 'learn more',
        margin = '20px 0 0 0',
        isMobile = false
    }: BookNowButtonProps
) {

    return (
        <a
            href={linkUrl}
            target={'_blank'}
            rel="noreferrer"
        >
            <button
                className={'bg-parkinn1 hover:bg-parkinn2  py-0 px-4 rounded-full inline-flex items-center shadow'}
                style={{
                    margin: margin
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        height: isMobile ? '40px' : '50px'
                    }}
                >
                    <VerticalCenterContainer>
                        <img
                            style={{
                                height: '70%',
                                width: 'auto',
                                filter: 'invert(1)',
                                marginRight: isMobile ? '10px' : '15px',
                            }}
                            src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/bed.png?alt=media&token=d817e800-3f0e-4905-958d-e99a78ce3129'}
                            alt={'Book now'}
                        />
                    </VerticalCenterContainer>
                    <VerticalCenterContainer>
                        <div
                            style={{
                                color: 'white',
                                fontWeight: 400,
                                fontSize: isMobile ? '1rem' : '1.3rem'
                            }}
                        >
                            {title}
                        </div>
                    </VerticalCenterContainer>
                </div>
            </button>
        </a>
    )
}
