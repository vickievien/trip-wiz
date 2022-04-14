import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import FooterComponent from '../main/footer/footerContainerComponent';
import NavContainerComponent from '../main/nav/navContainerComponent';


const HomeContainerComponent = () => {
    return (
        <>
            <header className='home-header'>
                <NavContainerComponent />
            </header>
            <main className="home-main">
                <section className='home-text-container'>
                    {/* <h2 className='home-text-title'>Trip Wiz</h2> */}
                    <h3 className='home-text-subtitle'>The pit-stop before your final destination decision.</h3>
                    <p className='home-text-caption'>Have vacation time but don't know where to go? See what other travelers have to say about the destinations that make them want to stay.</p>
                    <Link className="home-review-button" to="/reviews">Reviews<i className="fas fa-long-arrow-alt-right"></i></Link>   
                </section>
            </main>
            <FooterComponent />

            

        </>
    )
}

export default HomeContainerComponent;