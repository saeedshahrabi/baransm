import React from 'react';

interface IProps {
}

export class TextError extends React.Component<IProps>{
    render() {
        return <div className="invalid-feedback-- text-danger">{this.props.children}</div>
    }
}
