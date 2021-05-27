import React from 'react';
import s from './Message.module.css'

type propsMessage = {
    message: string,
}

export const Message = (props: propsMessage) => {
    return (
        <div className={s.message}>
            <div className={s.angle}></div>
            <div className={s.textArea}>{props.message}</div>
        </div>
    )
}
