interface CloseButtonProps {
    invert?: boolean,
    size: number,
    onClick: () => void
}

export default function CloseButton(
    {invert = false, size, onClick}: CloseButtonProps
) {
    return (
        <img
            alt={'close'}
            src={'./images/close.png'}
            style={{
                height: `${size}px`,
                width: `${size}px`,
                filter: `invert(${invert ? '1' : '0'})`,
                cursor: 'pointer'
            }}
            onClick={() => {onClick()}}
        />
    )
}
