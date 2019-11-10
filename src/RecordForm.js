import React from 'react'

const RecordForm = () => {
    return <form>
        <label htmlFor="recordName">Record Name</label>
        <input type="text" name="recordName" id="recordName"/>
        <label htmlFor="artistName">Artist Name</label>
        <input type="text" name="artistName" id="artistName"/>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" rows="10"></textarea>
        <button type="submit">Add</button>
    </form>
}

export default RecordForm;
