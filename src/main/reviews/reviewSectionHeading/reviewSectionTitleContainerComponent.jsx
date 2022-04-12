import React from 'react';
import '../../../App.css';
import NewReviewButtonComponent from '../newReviewModal/newReviewButtonComponent';

const ReviewSectionTitleContainerComponent = (props) => {
    return (
        <section className='section-title-container review-section-title-container'>
            <h2 className='section-title reviews-title'>Reviews</h2>
            <NewReviewButtonComponent toggleNewReviewModal={props.toggleNewReviewModal}/>
        </section>
    )
}

export default ReviewSectionTitleContainerComponent;