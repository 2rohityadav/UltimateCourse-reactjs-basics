import React, { Fragment } from 'react';
const InteractiveView = ({value, onAction, children}) =>
    <Fragment>
        <p>{value}</p>
        <button type="button" onClick={onAction}>{children}</button>
    </Fragment>

export default InteractiveView;