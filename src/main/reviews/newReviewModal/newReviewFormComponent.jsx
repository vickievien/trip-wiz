import React, {useState} from 'react';
import '../../../App.css';

const NewReviewFormComponent = (props) => {
    // SET USE STATE FOR NEW REVIEW INPUT
    const [newReview, setNewReview] = useState([])

    // FUNCTION FOR ON CHANGE TO GRAB UPDATES
    const handleInputChangeFunction = (e) => {
        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value
        })
    }

    // FUNCTION TO SUBMIT NEW REVIEW. NEEDS TO GO UPSTATE
    const submitNewReview = (e) => {
        e.preventDefault();
        props.createNewReviewFunction(newReview);
        setNewReview({
            reviewer_name: "",
            city: "",
            country: "",
            trip_start_date: "2022/01/01",
            trip_end_date: "2022/01/05",


        });
        props.toggleNewReviewModal();
    }


    return (
        <form className='new-review-form' onSubmit={submitNewReview}>
            <div className='form-input-container'>
                <label className='form-label' htmlFor="reviewer_name">Name:</label>
                <input className='form-input' type="text" name="reviewer_name" onChange={handleInputChangeFunction} placeholder="Your Name" required/>
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="city">City:</label>
                <input className='form-input' type="text" name="city" onChange={handleInputChangeFunction} placeholder="e.g. Miami" required/>
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="country">Country:</label>
                <input className='form-input' type="text" name="country" onChange={handleInputChangeFunction} placeholder="e.g. United States" required/>
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="trip_start_date">Trip Date (Start):</label>
                <input className='form-input' type="date" name="trip_start_date" onChange={handleInputChangeFunction} placeholder="e.g. 01/01/2021" required/>
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="trip_end_date">Trip Date (End):</label>
                <input className='form-input' type="date" name="trip_end_date" onChange={handleInputChangeFunction} placeholder="e.g. 01/01/2021" required/>
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="review">Review:</label>
                <textarea className='form-textarea' type="text" name="review" onChange={handleInputChangeFunction} placeholder="Your trip review here" required/>
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="review">Photo:</label>
                <input className='form-input' type="text" name="img" onChange={handleInputChangeFunction} placeholder="e.g. https://i.imgur.com/99v0yRs.jpg"/>
            </div>

            <input className='submit' type="submit" value="Submit"/>
        </form>
    )
}

export default NewReviewFormComponent;