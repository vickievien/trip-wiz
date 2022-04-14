import React, {useState, useEffect} from 'react';
import EditReviewContainerComponent from '../editReviewModal/editReviewContainerComponent';
import '../../../App.css';

const ReviewModalContainerComponent = (props) => {
    const [showEditReviewModal, setShowEditReviewModal] = useState(false)
    const toggleShowEditReviewModalFunction = () => {
        setShowEditReviewModal(!showEditReviewModal)
        // console.log(props.oneReviewInfo)
    }

    // const [updateReview, setUpdateReview] = useState({
    //     reviewer_name: props.oneReviewInfo.reviewer_name,
    //     city: props.oneReviewInfo.city,
    //     country: props.oneReviewInfo.country,
    //     trip_start_date: props.oneReviewInfo.trip_start_date,
    //     trip_end_date: props.oneReviewInfo.trip_end_date,
    //     review: props.oneReviewInfo.review,
    //     img: props.oneReviewInfo.img,
    //     id: props.oneReviewInfo.id
    // })

    // console.log(props.updateReview)
    // console.log(`props.oneReview: ${props.oneReviewInfo}`)
    // const [updateReview, setUpdateReview] = useState(props.oneReviewInfo)

    // console.log(props.oneReviewInfo)

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
                {showEditReviewModal ?
                <EditReviewContainerComponent toggleShowEditReviewModalFunction={toggleShowEditReviewModalFunction} oneReviewInfo={props.oneReviewInfo} updateReviewFunction={props.updateReviewFunction} setOneReviewInfo={props.setOneReviewInfo} />
                :
                <a className='review-modal-button update' onClick={toggleShowEditReviewModalFunction} ><i className="far fa-edit"></i>Update</a>
                }
                <a className='review-modal-button delete' onClick={() => props.deleteReviewFunction(props.oneReviewInfo.id)}><i className="far fa-trash-alt"></i>Delete</a>
            </div>
        </article>
        </>
    )
}

export default ReviewModalContainerComponent;