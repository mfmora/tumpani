export const selectAttraction = ({ attractions }, attractionId) => {
  let attraction = attractions[attractionId];
  attraction.tags = Object.values(attraction.tags);
  attraction.reviews = Object.values(attraction.reviews);
  return attraction;
}
