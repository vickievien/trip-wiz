import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavContainerComponent from './nav/navContainerComponent';
import NewReviewModalContainerComponent from './reviews/newReviewModal/newReviewModalContainerComponent';
import ReviewsContainerComponent from './reviews/reviewsContainerComponent';


const MainContainerComponent = () => {
    return (
        <>
            <header>
                <NavContainerComponent />
            </header>
            <ReviewsContainerComponent />


        </>
    )
}

export default MainContainerComponent;