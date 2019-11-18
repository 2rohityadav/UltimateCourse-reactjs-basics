import axios from 'axios'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Header from './Header'
import List from './List'
import RecordForm from './RecordForm'
import Section from './Section'
// import "./records.scss"
import {Global, css} from '@emotion/core';
const recordsStyle = css`
body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Comic Sans MS', 'Monotype Corsiva', sans-serif;
    background-color: #f5f4ed;
}

.visually-hidden:not(:focus):not(:active){
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

header {
    text-align: center;
    padding: 1em;
    h1 {
        margin: 0;
    }
}

main {
    height: 88vh;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding-left: 0.5em;

    section {
        border-top: 2px solid black;
        display: grid;
        grid-template-rows: 10vh 1fr;

        h2 {
            justify-self: center;
        }

        form {
            padding: 0.5em;
            display: flex;
            flex-direction: column;

            input,
            textarea {
                min-height: 1.5em;
                margin-bottom: 1em;
            }

            button {
                font-size: x-large;
                margin-bottom: 0;;
            }
        }

        ul {
            margin: 1em;
            padding: 0;
            list-style: none;
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: min-content;
            grid-gap: 2em;

            li {
                border-radius: 0.8em;
                border: 2px solid black;
                background-color: whitesmoke;
                padding: 0.5em;
            }

        }

        &:last-of-type{
            border-left: 2px solid black;
        }
    }
}
`;

const sortEntry = (a, b) => {
    return a.recordName < b.recordName ? -1 : (a.recordName > b.recordName ? 1 : 0)
};
const Container = ({ setShowApp }) => {
    const [records, setRecords] = useState([]);
    const [liveText, setLiveText] = useState('');
    const isMounted = useRef(true);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('/api/records', {
                headers: {
                    'Cache-control': 'private',
                    'X-Custom-Header': 'some-value'
                }
            });
            console.log(data)
            if (isMounted.current) {
                setRecords(data.sort(sortEntry))
            }
        }

        fetchData();

        return () => { isMounted.current = false; }
    }, [])

    async function onSubmitHandler(entry) {
        const { data } = await axios.post('/api/records', entry)
        if (isMounted.current) {
            setRecords([...records, data].sort(sortEntry));
            setLiveText(`${entry.recordName} successfully added.`);
        }
        // setShowApp(false)
    }
    return (
        <Fragment>
            <Global styles={recordsStyle} />
            <Header />
            <main>
                <Section headingText="Add a new favourite">
                    <RecordForm onSubmit={onSubmitHandler} />
                </Section>
                <Section headingText="Records">
                    <List records={records} />
                </Section>
            </main>
            <div className="visually-hidden" aria-live="polite" aria-atomic="true">{liveText}</div>
        </Fragment>
    )
};
export default class Wrapper extends React.Component {
    state = {
        showApp: true
    }
    setShowApp(val){
        this.setState({...[this.state], showApp: val});
    }
    render(){
        const {showApp} = this.state;
    return showApp && <Container setShowApp={this.setShowApp} />
    }
}