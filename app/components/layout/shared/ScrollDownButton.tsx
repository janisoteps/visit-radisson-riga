export default function ScrollDownButton() {

    return (
        <div
            className={'scroll-button'}
            onClick={() => {
                window.scrollBy({top: window.innerHeight, left: 0, behavior: "smooth"});
            }}
        >
            <img
                src={'https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/mouse-cursor.png?alt=media&token=eef84255-ea73-4e95-b492-f07a3a6ba972'}
                style={{
                    width: '60px',
                    height: 'auto',
                    filter: 'invert(1)'
                }}
                alt={'Scroll down'}
            />
        </div>
    )
}
