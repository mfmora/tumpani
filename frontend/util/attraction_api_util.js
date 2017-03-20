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
