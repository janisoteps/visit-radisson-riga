import VerticalCenterContainer from "~/components/layout/shared/VerticalCenterContainer";

interface BookNowButtonProps {
    onClick: () => void,
    title?: string,
    margin?: string,
}

export default function BookNowButtonBlu(
    {
        onClick,
        title = 'book now',
        margin = '20px 0 0 0',
    }: BookNowButtonProps
) {

    return (
        <button
            onClick={() => {onClick()}}
            className={'bg-blu1 hover:bg-blu2  py-0 px-4 rounded-full inline-flex items-center shadow'}
            style={{
                margin: margin
            }}
        >
            <div
                style={{
                    display: 'flex',
                    height: '50px'
                }}
            >
                <VerticalCenterContainer>
                    <img
                        style={{
                            height: '70%',
                            width: 'auto',
                            filter: 'invert(1)',
                            marginRight: '15px',
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
                            fontSize: '1.3rem'
                        }}
                    >
                        {title}
                    </div>
                </VerticalCenterContainer>
            </div>
        </button>
    )
}
