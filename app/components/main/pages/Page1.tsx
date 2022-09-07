import VerticalCenterContainer from "~/components/layout/shared/VerticalCenterContainer";

interface Page1Props {

}

export default function Page1({}: Page1Props) {

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
                        margin: '0 auto',
                        fontFamily: 'Arial'
                    }}
                >
                    <div
                        style={{
                            fontSize: '5.5vw',
                            color: 'white',
                            fontWeight: 700
                        }}
                        className={'entrance-fade-move'}
                    >
                        Radisson Hotel Group Riga
                    </div>
                    <div
                        style={{
                            fontSize: '2.2vw',
                            color: 'white',
                            fontWeight: 400,
                            paddingLeft: '5px'
                        }}
                        className={'entrance-fade-move'}
                    >
                        5 location in Riga, 3 different hotel brands
                    </div>
                </div>
            </VerticalCenterContainer>

            <div
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: '40px',
                }}
            >
                <div
                    style={{
                        fontFamily: 'Montserrat',
                        width: '400px',
                        textAlign: 'center',
                        fontSize: '1.9vw',
                        color: 'white',
                        fontWeight: 400,
                        margin: '0 auto',
                        fontStyle: 'italic',
                        display: 'flex'
                    }}
                >
                    <div>
                        Every Moment Matters
                    </div>
                    <div
                        style={{
                            fontFamily: 'sans-serif',
                            fontWeight: 300,
                            fontSize: '0.3rem',
                            fontStyle: 'normal',
                            transform: 'translateY(7px)',
                            paddingLeft: '1px'
                        }}
                    >
                        TM
                    </div>
                </div>
                <div className={'bg-blue-900 bg-blue-800'}></div>
            </div>
        </div>
    )
}
