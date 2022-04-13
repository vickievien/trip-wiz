import React, {useState, useEffect} from 'react';
import '../../App.css';
import NewReviewModalContainerComponent from './newReviewModal/newReviewModalContainerComponent';
import ReviewSectionTitleContainerComponent from './reviewSectionHeading/reviewSectionTitleContainerComponent';
import ReviewsGridContainerComponent from './reviewsGrid/reviewsGridContainerComponent';


const ReviewsContainerComponent = () => {
    // USE STATE HERE
    const [reviews, setReviews] = useState([]);
    
    const [showNewReviewModal, setShowNewReviewModal] = useState(false);
    const toggleNewReviewModal = () => {
        setShowNewReviewModal(!showNewReviewModal)
    }

    const [showReviewModal, setShowReviewModal] = useState(false)
    const toggleReviewModalFunction = () => {
        setShowReviewModal(!showReviewModal)
    }

    // GET REVIEWS
        // SEE USE EFFECT

    // CREATE NEW REVIEWS
    const createNewReviewFunction = async(newReview) => {
       const postNewReviewResponse = await fetch('https://trip-wiz-api.herokuapp.com/api/reviews/', {
           method: "POST",
           body: JSON.stringify(newReview),
           headers: {
               "Content-type": "application/json"
           }
       });
       const newReviewData = await postNewReviewResponse.json();
       setReviews([newReviewData, ...reviews]); 
    }    

    // UPDATE REVIEWS
    const updateReviewFunction = async(reviewToUpdate) => {
        const updateReviewResponse = await fetch(`https://trip-wiz-api.herokuapp.com/api/reviews/${reviewToUpdate.id}/`, {
            method: "PUT",
            body: JSON.stringify(reviewToUpdate),
            headers: {
                "Content-type": "application/json"
            }
        })
        const updateReviewData = await updateReviewResponse.json();
        const newReviewsWithUpdates = reviews.map(n => n.id === reviewToUpdate.id ? reviewToUpdate : n)
        setReviews(newReviewsWithUpdates)
    }

    // DELETE REVIEWS
    const deleteReviewFunction = async(deleteReviewId) => {
        const deleteReviewResponse = await fetch(`https://trip-wiz-api.herokuapp.com/api/reviews/${deleteReviewId}/`, {
            method: "DELETE",
        });
        console.log('delete functioning working')
        const newReviews = reviews.filter(n=> n.id !== deleteReviewId)
        setReviews(newReviews)
        toggleReviewModalFunction()
    }


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
            <ReviewSectionTitleContainerComponent toggleNewReviewModal={toggleNewReviewModal} />
            <NewReviewModalContainerComponent toggleNewReviewModal={toggleNewReviewModal} showNewReviewModal={showNewReviewModal} createNewReviewFunction={createNewReviewFunction}/>
            <ReviewsGridContainerComponent reviews={reviews} deleteReviewFunction={deleteReviewFunction} toggleReviewModalFunction={toggleReviewModalFunction} showReviewModal={showReviewModal} updateReviewFunction={updateReviewFunction} />
        </main>
    )
}

export default ReviewsContainerComponent;