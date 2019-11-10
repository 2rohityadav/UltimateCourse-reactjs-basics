import React, {useState} from 'react'
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
        <label htmlFor="recordName">Record Name</label>
        <input type="text" onChange={onChangeHandler} value={entry.recordName} name="recordName" id="recordName"/>
        <label htmlFor="artistName">Artist Name</label>
        <input type="text" onChange={onChangeHandler} value={entry.artistName} name="artistName" id="artistName"/>
        <label htmlFor="description">Description</label>
        <textarea name="description" onChange={onChangeHandler} value={entry.description} id="description" rows="10"></textarea>
        <button type="submit">Add</button>
    </form>
}

export default RecordForm;
