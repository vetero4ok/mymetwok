import React, {ChangeEvent,KeyboardEvent} from 'react';

type StatusComponentPropsType = {
    profileStatus: string
    setStatusProfileTC: (title: string) => void
}
type StatusComponentState = {
    editMode: boolean
    localStatus: string
}

export class ProfileStatus extends React.Component<StatusComponentPropsType, StatusComponentState> {
    state = {
        editMode: false,
        localStatus: this.props.profileStatus,
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            localStatus: e.currentTarget.value
        })
    }
    onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')  this.deActivateEditMode()
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.setStatusProfileTC(this.state.localStatus)
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}
                        >{(this.props.profileStatus === '') ? 'My status' : this.props.profileStatus}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input
                            type="text"
                            placeholder={'Input your status'}
                            value={this.state.localStatus}
                            onChange={this.onChangeHandler}
                            onKeyPress={this.onEnter}
                            onBlur={this.deActivateEditMode}
                            autoFocus
                        />
                    </div>
                }
            </>);
    }
}