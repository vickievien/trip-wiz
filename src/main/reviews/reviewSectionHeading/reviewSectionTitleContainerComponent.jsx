import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import NewReviewButtonComponent from '../newReviewModal/newReviewButtonComponent';

const ReviewSectionTitleContainerComponent = (props) => {
    return (
        <section className='section-title-container review-section-title-container'>
            <h2 className='section-title reviews-title'>Reviews</h2>
            
                
            {/* <Link to="/new-review"> */}
                <NewReviewButtonComponent toggleNewReviewModal={props.toggleNewReviewModal}/>
            {/* </Link>   */}
            
        </section>
    )
}

export default ReviewSectionTitleContainerComponent;