import React from 'react';
import ReactStars from 'react-stars';

const ReviewShow = ({ review }) => {
  debugger;
  return(
    <div className="review-show-info">
      <span className="review-title">{ review.username }</span>
      <span className="review-subtitle">{ review.date } ago</span>
      <span className="review-text">
        <ReactStars edit={false}
                    value={review.stars}
                    size={18}
                    color2={'#F44504'}/>
        <p>{ review.message }</p>
      </span>
    </div>
  );
};

export default ReviewShow;
