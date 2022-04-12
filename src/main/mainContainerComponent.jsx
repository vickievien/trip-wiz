import React from 'react';
import NavContainerComponent from './nav/navContainerComponent';
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