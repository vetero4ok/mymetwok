import React from 'react';

type StatusComponentPropsType = {
    status: string
}
type StatusComponentState = {
    editMode: boolean
  //  title:string
}

export class ProfileStatus extends React.Component<StatusComponentPropsType, StatusComponentState> {
    state = {
        editMode: false,
      //  title: '',
    }

    activateEditMode() {
        this.setState({
            editMode: true,
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false,
          })
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode.bind(this)}
                        >{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input
                            type="text"
                            placeholder={'input text'}
                            value={this.props.status}
                            // onChange={(e)=>this.setState({
                            //     title: e.currentTarget.value
                            // })}
                            onBlur={this.deActivateEditMode.bind(this)}
                            autoFocus
                        />
                    </div>
                }
            </>);
    }
}