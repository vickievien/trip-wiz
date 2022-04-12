import React, {useState} from 'react';
import ReviewModalContainerComponent from './reviewModalContainerComponent';

const ReviewArticleComponent = (props) => {
    // const [showReviewModal, setShowReviewModal] = useState(false)
    // const toggleReviewModalFunction = () => {
    //     setShowReviewModal(!showReviewModal)
    // }

    const [oneReviewInfo, setOneReviewInfo] = useState({})
    const getOneReviewFunction = async(reviewId) => {
        const getOneReviewInfoResponse = await fetch(`https://trip-wiz-api.herokuapp.com/api/reviews/${reviewId}`)
        const getOneReviewInfoData = await getOneReviewInfoResponse.json()
        setOneReviewInfo(getOneReviewInfoData);
        console.log(getOneReviewInfoData)
    }

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
                <ReviewModalContainerComponent toggleReviewModalFunction={props.toggleReviewModalFunction} oneReviewInfo={oneReviewInfo} deleteReviewFunction={props.deleteReviewFunction}/>
            :
                ""
            }

            
           
        </>
    )
}

export default ReviewArticleComponent;