import React, {useState} from 'react';
import ReviewModalContainerComponent from './reviewModalContainerComponent';
import '../../../App.css';

const ReviewArticleComponent = (props) => {

    const [oneReviewInfo, setOneReviewInfo] = useState({})
    const getOneReviewFunction = async(reviewId) => {
        const getOneReviewInfoResponse = await fetch(`https://trip-wiz-api.herokuapp.com/api/reviews/${reviewId}`)
        const getOneReviewInfoData = await getOneReviewInfoResponse.json()
        setOneReviewInfo(getOneReviewInfoData);
        // setUpdateReview(getOneReviewInfoData);
    }


    // const [updateReview, setUpdateReview] = useState({
    //     id: oneReviewInfo.id,
    //     reviewer_name: oneReviewInfo.reviewer_name,
    //     city: oneReviewInfo.city,
    //     country: oneReviewInfo.country,
    //     trip_start_date: oneReviewInfo.trip_start_date,
    //     trip_end_date: oneReviewInfo.trip_end_date,
    //     review: oneReviewInfo.review,
    //     img: oneReviewInfo.img,
    // })

    const reviews = props.reviews.map(review => {
        return (
            <article className='review-article-container' key={review.id} onClick={() => getOneReviewFunction(review.id)}>
                <img className="review-img" src={review? review.img : ""} alt={review? review.city : ""} />
                <div className='review-right'>
                    <section className='review-text-container'>
                        <h2 className='review-text-location'>{review? review.city : ""}, {review? review.country : ""}</h2>
                        <p className='review-text-review'>{review? review.review : ""}</p>
                        <a className='review-more-button' onClick={props.toggleReviewModalFunction}>Show More</a>
                    </section>
                </div>
            </article>
        )
    })


    return (
        <>
            {reviews}
            {props.showReviewModal ? 
                <ReviewModalContainerComponent toggleReviewModalFunction={props.toggleReviewModalFunction} oneReviewInfo={oneReviewInfo} deleteReviewFunction={props.deleteReviewFunction} updateReviewFunction={props.updateReviewFunction} setOneReviewInfo={setOneReviewInfo} />
            :
                ""
            }

            
           
        </>
    )
}

export default ReviewArticleComponent;