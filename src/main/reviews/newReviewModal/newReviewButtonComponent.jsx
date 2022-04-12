import React from 'react';
import '../../../App.css';

const NewReviewButtonComponent = (props) => {
    return (
        <a className='new-review-button' onClick={props.toggleNewReviewModal}><i className="fas fa-edit"></i>Add a review</a>
    )
}

export default NewReviewButtonComponent;