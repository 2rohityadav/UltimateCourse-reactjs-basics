import React, {Fragment} from 'react'
import Header from './Header'
import Section from './Section'
import List from './List'
import "./records.scss"
import RecordForm from './RecordForm'

const Container = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Section headingText="Add a new favourite">
                    <RecordForm />
                </Section>
                <Section headingText="Records">
                    <List />
                </Section>
            </main>
        </Fragment>
    )
};

export default Container;