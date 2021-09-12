import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';

type StatusComponentPropsType = {
    profileStatus: string
    setStatusProfileTC: (title: string) => void
}

export const ProfileStatusWithHooks = (props: StatusComponentPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.profileStatus)
    useEffect(()=> {
        setStatus(props.profileStatus)
    }, [props.profileStatus])
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const setStatusProfile = () => {
        setEditMode(false)
        props.setStatusProfileTC(status)
    }
    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
         if (e.key === 'Enter') setStatusProfile()
    }
    return (
        <>
            {!editMode &&
            <div>
                 <span onDoubleClick={() => setEditMode(true)}>
                    {(props.profileStatus === '') ? 'My status' : props.profileStatus}
                 </span>
            </div>}
            {editMode &&
            <div>
                <input
                    type="text"
                    placeholder={'Input your status'}
                    value={status}
                    onChange={onChangeHandler}
                    onKeyPress={onEnterHandler}
                    onBlur={setStatusProfile}
                    autoFocus
                />
            </div>
            }
        </>);
}
