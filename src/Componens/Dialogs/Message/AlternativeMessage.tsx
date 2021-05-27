import React from 'react';
import s from './AlternativeMessage.module.css'

type propsMessage = {
    message: string,
}

export const AlternativeMessage = (props: propsMessage) => {
    return (
        <div className={s.message}>
            <div className={s.textArea}>{props.message}
            </div><div className={s.angle}></div>
        </div>
    )
}
