import React, {useState} from 'react';
import '../../../App.css';

const EditReviewFormComponent = (props) => {
    // SET USE STATE FOR NEW REVIEW INPUT
    // const [updateReview, setUpdateReview] = useState(props.oneReviewInfo)

    // FUNCTION FOR ON CHANGE TO GRAB UPDATES
    const handleInputChangeFunction = (e) => {
        props.setOneReviewInfo({
            ...props.oneReviewInfo,
            [e.target.name]: e.target.value
            
        })
    }

    const submitReviewUpdateFunction = (e) => {
        e.preventDefault()
        // console.log(`props.one review is ${props.oneReviewInfo}`)
        // console.log(`props update review is ${props.updateReview}`)
        props.updateReviewFunction(props.oneReviewInfo)
        props.toggleShowEditReviewModalFunction()
    
    }
    
    // console.log(`props one review outside when edit review form renders is: ${JSON.stringify(props.oneReviewInfo)}`)

    return (
        <form className='edit-review-modal-form-container' onSubmit={submitReviewUpdateFunction}>
            <div className='form-input-container'>
                <label className='form-label' htmlFor="reviewer_name">Name:</label>
                <input className='form-input' type="text" name="reviewer_name" onChange={handleInputChangeFunction} defaultValue={props.oneReviewInfo.reviewer_name} required/>
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="city">City:</label>
                <input className='form-input' type="text" name="city" onChange={handleInputChangeFunction} defaultValue={props.oneReviewInfo.city} />
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="country">Country:</label>
                <input className='form-input' type="text" name="country" onChange={handleInputChangeFunction} defaultValue={props.oneReviewInfo.country} />
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="trip_start_date">Trip Date (Start):</label>
                <input className='form-input' type="date" name="trip_start_date" onChange={handleInputChangeFunction} defaultValue={props.oneReviewInfo.trip_start_date}/>
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="trip_end_date">Trip Date (End):</label>
                <input className='form-input' type="date" name="trip_end_date" onChange={handleInputChangeFunction} defaultValue={props.oneReviewInfo.trip_end_date}/>
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="review">Review:</label>
                <textarea className='form-textarea' type="text" name="review" onChange={handleInputChangeFunction} defaultValue={props.oneReviewInfo.review} />
            </div>

            <div className='form-input-container'>
                <label className='form-label' htmlFor="review">Photo:</label>
                <input className='form-input' type="text" name="img" onChange={handleInputChangeFunction} defaultValue={props.oneReviewInfo.img}/>
            </div>

            <div className='form-input-container'>
                <input className='submit' type="submit" value="Update"/>
            </div>
        </form>
    )
}

export default EditReviewFormComponent;