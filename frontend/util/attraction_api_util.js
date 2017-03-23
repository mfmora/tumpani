export const search = text => (
  $.ajax({
    method: 'GET',
    url: 'api/attractions',
    data: { text }
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

export const addBookmark = bookmark => (
  $.ajax({
    method: 'POST',
    url: 'api/bookmarks',
    data: { bookmark }
  })
);
