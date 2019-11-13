import React, { Fragment, useState, useEffect, useRef } from 'react'
import Header from './Header'
import Section from './Section'
import List from './List'
import "./records.scss"
import RecordForm from './RecordForm'
import axios from 'axios';
const recordsData = [
    {
        recordName: 'React Rave',
        artistName: 'The Developers',
        description: 'A rocking good rave bopping to the tune of JavaScript.'
    },
    {
        recordName: 'Building an App',
        artistName: 'The Components',
        description: 'Sounds of the future.'
    }
]
const sortEntry = (a, b) => {
    return a.recordName < b.recordName ? -1 : (a.recordName > b.recordName ? 1 : 0)
};
const Container = ({ setShowApp }) => {
    const [records, setRecords] = useState([]);
    const [liveText, setLiveText] = useState('');
    const isMounted = useRef(true);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('/api/records');
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

const Wrapper = () => {
    const [showApp, setShowApp] = useState(true);
    return showApp && <Container setShowApp={setShowApp} />
}

export default Wrapper;