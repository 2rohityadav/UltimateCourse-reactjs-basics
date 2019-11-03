import React from "react";
import "./machine.scss";

const ErrorMessage = ({ showError }) => showError ? <span>Oh No I am broken!</span> : null;

const UltimateMachine = () => {
    const [showError, setShowError] = React.useState(false),
        onClickHandler = () => {
            setShowError(i => !i);
        };

    return (
        <section>
            <h1>The Ultimate Machine</h1>
            <ErrorMessage showError={showError} />
            <button type="button" onClick={onClickHandler} aria-pressed={showError}>
                ToggleError
            </button>
        </section>
    );
};

export default UltimateMachine;
