import React from "react";

interface VerticalCenterContainerProps {
    children: React.ReactElement
}

export default function VerticalCenterContainer(
    {children}: VerticalCenterContainerProps
) {
    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative'
            }}
        >
            {children}
        </div>
    )
}
