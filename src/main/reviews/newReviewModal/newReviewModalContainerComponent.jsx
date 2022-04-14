import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import NewReviewFormComponent from './newReviewFormComponent';

const NewReviewModalContainerComponent = (props) => {
    return (
        <>
                {/* <Link to="/add-review"> */}
            {props.showNewReviewModal ?
                <div className='new-review-modal-container'>
                    {/* <Link to="/"> */}
                    <p className='new-modal-close' onClick={props.toggleNewReviewModal}><i className="fas fa-times"></i></p>
                    {/* </Link> */}


                    <NewReviewFormComponent createNewReviewFunction={props.createNewReviewFunction} toggleNewReviewModal={props.toggleNewReviewModal}/>

                </div>
                : ""}
                {/* </Link> */}
        </>
    )
}

export default NewReviewModalContainerComponent;