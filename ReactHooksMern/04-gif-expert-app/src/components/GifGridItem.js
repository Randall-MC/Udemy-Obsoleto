import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="gifGrid__container animate__animated animate__fadeIn">
            <img className="gifGrid__img" src={ url } alt={ title } />
            <p className="gifGrid__title">{ title }</p>
        </div>
    )
}
