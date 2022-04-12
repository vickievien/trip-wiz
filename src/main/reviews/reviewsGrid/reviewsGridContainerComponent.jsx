import React from 'react';
import ReviewArticleComponent from './reviewArticleComponent';

const ReviewsGridContainerComponent = (props) => {
    return (
        <section className='reviews-grid-container'>
            <ReviewArticleComponent reviews={props.reviews} deleteReviewFunction={props.deleteReviewFunction} toggleReviewModalFunction={props.toggleReviewModalFunction} showReviewModal={props.showReviewModal}  />
        </section>
    )
}

export default ReviewsGridContainerComponent;