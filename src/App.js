
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainerComponent from './main/mainContainerComponent';
// import ReviewsContainerComponent from './main/reviews/reviewsContainerComponent';

const App = () => {
  return (
    <>
      <MainContainerComponent/>

      {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainContainerComponent/>}/> 
            <Route path="/reviews" element={<MainContainerComponent/>}/> 
        </Routes>
      </BrowserRouter> */}
    
    </>

  );
}

export default App;
