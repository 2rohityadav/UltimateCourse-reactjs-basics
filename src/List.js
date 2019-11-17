import React from 'react'

const List2 = ({ records }) => {
    return <ul>
        {records.map(({ id, recordName, artistName, description }) => <li key={id}>
            <h3>{recordName}</h3>
            <span>{artistName}</span>
            <p>{description}</p>
        </li>)}
    </ul>
}

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