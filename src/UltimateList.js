import React, { Fragment } from 'react';
const sourceObj = {
    val1: 'Value 1',
    val2: 'Value 2',
    val3: 'Value 3',
    val4: 'Value 4'
};

export default class UltimateList extends React.Component {
    render(){
        return <section>
            <h1>Ultimate Object Listing</h1>
            <ol>
                {Object.keys(sourceObj).map(key =>
                    <Fragment key={key}>
                        <li>{sourceObj[key]}</li>
                    </Fragment>)}
            </ol>
        </section>
    }
}