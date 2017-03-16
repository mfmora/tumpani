export const search = text => (
  $.ajax({
    method: 'GET',
    url: 'api/attractions',
    data: { text }
  })
);
