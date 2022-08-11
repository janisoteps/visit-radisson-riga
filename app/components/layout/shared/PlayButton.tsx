import VerticalCenterContainer from "~/components/layout/shared/VerticalCenterContainer";

interface PlayButtonProps {
    onClick: () => void
}

export default function PlayButton({onClick}: PlayButtonProps) {
    return (
        <div
            style={{
                width: '300px',
                height: '300px'
            }}
        >
            <VerticalCenterContainer>
                <div
                    style={{
                        width: 'fit-content',
                        margin: '0 auto'
                    }}
                    onClick={() => {onClick()}}
                >
                    <button
                        type="button"
                        className="bg-black bg-opacity-50 text-white-700 hover:bg-white-700 hover:text-white
                        focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-full text-sm p-2.5
                        text-center inline-flex items-center dark:border-white-500 dark:text-white-500
                        dark:hover:text-white dark:focus:ring-white-800"
                    >
                        <svg aria-hidden="true" className="w-56 h-56 animate-pulse" fill="white" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </VerticalCenterContainer>

        </div>
    )
}
