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

    return (
        <section>
            <h1>The Ultimate Machine</h1>
            {isOn ? <OnMessage /> : <OffMessage />}
            <button type="button" onClick={onClickHandler} aria-pressed={isOn}>
                On/Off
            </button>
        </section>
    );
};

export default UltimateMachine;
