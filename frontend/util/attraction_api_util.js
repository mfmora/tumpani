export const search = text => (
  $.ajax({
    method: 'GET',
    url: 'api/attractions',
    data: { text }
  })
);

export const fetchBookmarks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/attractions'
  })
);

export const searchTag = tag => (
  $.ajax({
    method: 'GET',
    url: 'api/attractions',
    data: { tag }
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);

export const editReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.id}`,
    data: { review }
  })
);

export const addBookmark = bookmark => (
  $.ajax({
    method: 'POST',
    url: 'api/bookmarks',
    data: { bookmark }
  })
);

export const deleteBookmark = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookmarks/${id}`
  })
);
