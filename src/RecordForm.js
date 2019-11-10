import React, {useState} from 'react'
import RecordInput from './RecordInput'
const initialEntryState = {
    recordName: '',
    artistName: '',
    description: ''
}
const RecordForm = ({onSubmit}) => {
    const [entry, setEntry] = useState(initialEntryState)
    function onSubmitHandler(e) {
        e.preventDefault();
        if(entry.recordName && entry.artistName){
            onSubmit({...entry});
            setEntry(initialEntryState);
        }
    }
    function onChangeHandler(e){
        setEntry({
            ...entry,
            [e.target.name]: e.target.value
        })
    }
    return <form onSubmit={onSubmitHandler}>
        <RecordInput labelText="Record Name" onChange={onChangeHandler} value={entry.recordName} name="recordName"/>
        <RecordInput labelText="Artist Name" onChange={onChangeHandler} value={entry.artistName} name="artistName"/>
        <RecordInput type="textarea" labelText="Description" onChange={onChangeHandler} value={entry.description} name="description" rows="10"/>
        <button type="submit">Add</button>
    </form>
}

export default RecordForm;
