import {
    string,
    bool,
    func,
    any
} from 'prop-types';

import React from 'react';

const propTypes = {
    label: any,
    primary: bool,
    type: string,
    disabled: bool,
    onClick: func,
    className: string,
    children: any
};

const defaultProps = {
    type: 'button'
};

const ReactButton = (props) => {

    return (
        <button type={props.type} disabled={props.disabled} onClick={props.onClick}>
            {props.label || props.children}
        </button>
    );

};
ReactButton.propTypes = propTypes;
ReactButton.defaultProps = defaultProps;

export default ReactButton;
