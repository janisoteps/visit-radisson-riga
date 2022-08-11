import VerticalCenterContainer from "~/components/layout/shared/VerticalCenterContainer";
import IntroLogo from "~/components/layout/intro/IntroLogo";

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
            <IntroLogo />
            <VerticalCenterContainer>
                <div
                    style={{
                        width: '70vw',
                        margin: '0 auto'
                    }}
                >
                    <div
                        style={{
                            fontSize: '6vw',
                            color: 'white',
                            fontWeight: 700
                        }}
                    >
                        Main Slogan Phrase
                    </div>
                    <div
                        style={{
                            fontSize: '2.5vw',
                            color: 'white',
                            fontWeight: 400
                        }}
                    >
                        A nice sounding blurb that represents us well
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
