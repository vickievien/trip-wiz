import React from 'react';

const ReviewArticleComponent = (props) => {

    const reviews = props.reviews.map(review => {
        return (
            <article className='review-article-container' key={review.id}>
                <img className="review-img" src={review? review.img : ""} alt={review? review.city : ""} />
                <div className='review-text-container'>
                    <h2 className='review-text-location'>{review? review.city : ""}, {review? review.country : ""}</h2>
                    <p className='review-text-review'>{review? review.review : ""}</p>
                </div>
            </article>
        )
    })


    return (
        <>
            {reviews}
        </>
    )
}

export default ReviewArticleComponent;