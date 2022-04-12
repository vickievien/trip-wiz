import React from 'react';
import '../../../App.css';
import NewReviewFormComponent from './newReviewFormComponent';

const NewReviewModalContainerComponent = (props) => {
    return (
        <>
            {props.showNewReviewModal ?
                <div className='new-review-modal-container'>
                    <a className='new-modal-close' onClick={props.toggleNewReviewModal}><i className="fas fa-times"></i></a>
                    <NewReviewFormComponent createNewReviewFunction={props.createNewReviewFunction} toggleNewReviewModal={props.toggleNewReviewModal}/>
                </div>
            : ""} 
        </>
    )
}

export default NewReviewModalContainerComponent;