import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [weight, setWeight] = useState (0); //setWeight is function that is called to update the weight state variable
    const [date, setDate] = useState ('')

    function handleSubmit (event){
        event.preventDefault(); //stops the page from refreshing after hitting th add button
        let newEntry = {
            weight: weight,
            date: date
        };
        console.log(newEntry)
        props.addNewEntryProperty(newEntry)
    }

    return ( <form onSubmit={handleSubmit}>
        <label>Weight</label>
        <input type = 'number' value = {weight} onChange={(event)=>setWeight(parseFloat(event.target.value))}/>
        <label>Date</label>
        <input type ="date" value = {date} onChange={(event)=>setDate(event.target.value)}/>
        <button type="submit">Add</button>
    </form> );
}
//event.target.value updates the weight state vairable
 
export default AddEntryForm;