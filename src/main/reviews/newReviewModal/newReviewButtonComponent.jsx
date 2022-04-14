import React from 'react';
import '../../../App.css';
// import { Link } from 'react-router-dom';


const NewReviewButtonComponent = (props) => {
    return (
        // <Link to="/add-review">

            <p className='new-review-button' onClick={props.toggleNewReviewModal}><i className="fas fa-edit"></i>Add a review</p>
        // </Link>
    )
}

export default NewReviewButtonComponent;