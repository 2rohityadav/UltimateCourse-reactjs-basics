import React from "react";
import "./machine.scss";

const OnMessage = () => <span>Machine is ON!</span>;
const OffMessage = () => <span>Machine is OFF!</span>;

const OnOff = ({ isOn }) => (isOn ? <OnMessage /> : <OffMessage />);

const UltimateMachine = () => {
    const [isOn, setIsOn] = React.useState(false),
        onClickHandler = () => {
            setIsOn(i => !i);
        };

    const getMessage = () => {
        return isOn ? <OnMessage /> : <OffMessage />;
    };

    return (
        <section>
            <h1>The Ultimate Machine</h1>
            {getMessage()}
            <button type="button" onClick={onClickHandler} aria-pressed={isOn}>
                On/Off
      </button>
        </section>
    );
};

export default UltimateMachine;
