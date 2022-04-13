import React from 'react';
import '../../../App.css';
import EditReviewFormComponent from './editReviewFormComponent';

const EditReviewContainerComponent = (props) => {
    console.log(`edit container: ${props.oneReviewInfo}`)
    return (
        <section className='edit-review-modal-container'>
            <a className='edit-modal-close' onClick={props.toggleShowEditReviewModalFunction}><i className="fas fa-times"></i></a>
            <EditReviewFormComponent onClick={props.toggleShowEditReviewModalFunction} oneReviewInfo={props.oneReviewInfo} updateReviewFunction={props.updateReviewFunction} toggleShowEditReviewModalFunction={props.toggleShowEditReviewModalFunction} setOneReviewInfo={props.setOneReviewInfo} />
        </section>
    )
}

export default EditReviewContainerComponent;