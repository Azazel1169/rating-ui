const Star = ({ star, rating, hover, color, ratingClick }) => {
  return (
    <span
      onClick={() => ratingClick(star)}
      className='star'
      style={{ color: star <= (hover || rating) ? color : '#ccc' }}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
