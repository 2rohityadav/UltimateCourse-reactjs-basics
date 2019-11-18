import React from 'react';

export default class List extends React.Component{
    render(){
        const {records}= this.props;
        return <ul>
        {records.map(({ id, recordName, artistName, description }) => <li key={id}>
            <h3>{recordName}</h3>
            <span>{artistName}</span>
            <p>{description}</p>
        </li>)}
    </ul>
    }
};