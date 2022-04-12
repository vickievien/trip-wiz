import React from 'react';
import ReviewArticleComponent from './reviewArticleComponent';

const ReviewsGridContainerComponent = (props) => {
    return (
        <section className='reviews-grid-container'>
            <ReviewArticleComponent reviews={props.reviews}/>
        </section>
    )
}

export default ReviewsGridContainerComponent;