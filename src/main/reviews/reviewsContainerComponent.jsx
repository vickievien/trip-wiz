import React, {useState, useEffect} from 'react';
import '../../App.css';
import ReviewsGridContainerComponent from './reviewsGridContainerComponent';


const ReviewsContainerComponent = () => {
    // USE STATE HERE
    const [reviews, setReviews] = useState([]);
    
    const [showNewReviewModal, setShowNewReviewModal] = useState(false);
    const toggleNewReviewModal = () => {
        setShowNewReviewModal(!showNewReviewModal)
    }

    const [showReviewDetailsModal, setShowReviewDetailsModal] = useState(false);
    const toggleShowReviewDetailsModal = () => {
        setShowReviewDetailsModal(!showReviewDetailsModal)
    }

    // GET REVIEWS
        // SEE USE EFFECT

    // CREATE NEW REVIEWS
    // const createNewReviewFunction = async(newReview) => {
        
    // }    


    // UPDATE REVIEWS

    // DELETE REVIEWS

    // USE EFFECT FOR GET REVIEWS
    // useEffect(getReviewsFunction, []);

    useEffect(() => {
        async function getReviewsFunction() {
            const getReviewsResponse = await fetch('https://trip-wiz-api.herokuapp.com/api/reviews/');
            const getReviewsData = await getReviewsResponse.json();
            console.log(getReviewsData);
            setReviews(getReviewsData);
        }
        getReviewsFunction();
    }, []);

    return (
        <main className='reviews-main-container'>
            <h2>Reviews</h2>
            <a>Add a Review</a>
            <ReviewsGridContainerComponent reviews={reviews}/>
        </main>

    )
}

export default ReviewsContainerComponent;