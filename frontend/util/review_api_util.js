export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);

export const fetchReviews = attraction_id => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: { attraction_id }
  })
);
