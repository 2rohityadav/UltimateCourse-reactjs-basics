import React, {Fragment, useState} from 'react'
import Header from './Header'
import Section from './Section'
import List from './List'
import "./records.scss"
import RecordForm from './RecordForm'
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
const sortEntry = (a,b) => {
            return a.recordName < b.recordName ? -1 : (a.recordName > b.recordName ? 1 : 0)
};
const Container = () => {
    const [records, setRecords] = useState([]);
    const [liveText, setLiveText] = useState('');

    function onSubmitHandler(entry){
        setRecords([...records, entry].sort(sortEntry));
        setLiveText(`${entry.recordName} successfully added.`);
    }
    return (
        <Fragment>
            <Header />
            <main>
                <Section headingText="Add a new favourite">
                    <RecordForm onSubmit={onSubmitHandler}/>
                </Section>
                <Section headingText="Records">
                    <List records={records} />
                </Section>
            </main>
            <div className="visually-hidden" aria-live="polite" aria-atomic="true">{liveText}</div>
        </Fragment>
    )
};

export default Container;