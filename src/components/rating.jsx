import { useState } from 'react'; // Import useState hook from React
import Star from './Star'; // Import the Star component
import Modal from './Modal'

const Rating = ({ heading = 'Rate your experience!', color = 'gold' }) => {
  // Define Rating component with default props
  const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']; // Feedback messages for each rating
  const [rating, setRating] = useState(0); // State for selected rating, default 0
  const [hover, setHover] = useState(0); // State for hovered star, default 0
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1); // Create array [1,2,3,4,5] for stars

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  // Close modal and reset UI
  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };

  return (
    <div className='rating-container'>
      {' '}
      {/* Container for the rating UI */}
      <h2>{heading}</h2> {/* Display heading */}
      <div className='stars'>
        {' '}
        {/* Container for stars */}
        {stars.map(
          (
            star // Loop through each star
          ) => (
            <Star
              key={star} // Unique key for each star
              star={star} // Star number (1-5)
              rating={rating} // Current selected rating
              hover={hover} // Current hovered star
              color={color} // Color for filled stars
              ratingClick={setRating} // Function to set rating on click
              hoverEnter={setHover} // Function to set hover on mouse enter
              hoverLeave={() => setHover(null)} // Function to reset hover on mouse leave
            />
          )
        )}
      </div>
      {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}{' '}
      {/* Show feedback if rated */}
      <button
        className='submit-btn'
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button>
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating; // Export the Rating
