import React from 'react'

export default function Error() {

    let errorStyle = {
        margin: 'auto',
        width: '50%',
        border: '3px solid green',
        padding: '10px',
        textAlign: 'center',
    }

    return (
        <div style={errorStyle}>
            <h1>
                404 Page Not Found

            </h1 >
        </div>
    )
}
