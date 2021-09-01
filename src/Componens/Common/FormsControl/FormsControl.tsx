import React from 'react';
import s from './FormsControl.module.css'

/** Коректно не працює якщо в форму підставити textarea тому пока буде 2 інпута 77 урок
 * танець з бубном  */
// export const TextAreaComp: React.FC = (props: any) => {
//     const {textarea, meta: {touched, error, ...restProps}, ...rest} = props
//     const showError = touched && error
//
//     return <>
//         <div className={s.formControl + ' ' + (showError ? s.error : '')}>
//             <textarea {...textarea} {...rest}/>
//         </div>
//         <div>
//             {showError && <span>{error}</span> }
//         </div>
//     </>
// }
export const InputComp: React.FC = (props: any) => {
    const {input, meta: {touched, error, ...restProps}, ...rest} = props
const showError = touched && error

    return <>
        <div className={s.formControl + ' ' + (showError ? s.error : '')}>
            <input {...input} {...rest}/>
        </div>
        <div>
            {showError && <span>{error}</span> }
        </div>
    </>
}