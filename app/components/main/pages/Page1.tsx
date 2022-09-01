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
                        margin: '0 auto'
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
                            fontWeight: 400
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
                    bottom: '20px',
                }}
            >
                <div
                    style={{
                        width: '300px',
                        textAlign: 'center',
                        fontSize: '1.2vw',
                        color: 'white',
                        fontWeight: 300,
                        margin: '0 auto',
                        fontStyle: 'italic'
                    }}
                >
                    Every Moment Matters
                </div>
            </div>
        </div>
    )
}
