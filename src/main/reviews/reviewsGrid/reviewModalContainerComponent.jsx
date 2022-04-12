import React from 'react';

const ReviewModalContainerComponent = (props) => {

    return (
        <>
        <article className='review-modal-container' key={props.oneReviewInfo.id}>
            <a><i className="fas fa-times review-modal-close" onClick={props.toggleReviewModalFunction}></i></a>
            <img className="review-modal-img" src={props.oneReviewInfo? props.oneReviewInfo.img : ""} alt={props.oneReviewInfo? props.oneReviewInfo.city : ""} />
            <div className='review-modal-text'>
                <section className='review-modal-text-container'>
                    <h2 className='review-text-location'>{props.oneReviewInfo? props.oneReviewInfo.city : ""}, {props.oneReviewInfo? props.oneReviewInfo.country : ""}</h2>
                    <p className='review-text-date'>Trip Dates: {props.oneReviewInfo? props.oneReviewInfo.trip_start_date : ""} - {props.oneReviewInfo? props.oneReviewInfo.trip_end_date : ""}</p>
                    <p className='review-text-review'>{props.oneReviewInfo? props.oneReviewInfo.review : ""}</p>
                    <p className='review-text-reviewer'>- {props.oneReviewInfo? props.oneReviewInfo.reviewer_name : ""}</p>
                </section>
            </div>
            <div className='review-modal-button-container'>
                <a className='review-modal-button update'><i className="far fa-edit"></i>Update</a>
                <a className='review-modal-button delete' onClick={() => props.deleteReviewFunction(props.oneReviewInfo.id)}><i className="far fa-trash-alt"></i>Delete</a>
            </div>
        </article>
        </>
    )
}

export default ReviewModalContainerComponent;