export const selectAttraction = ({ attractions }, attractionId) => {
  let attraction = attractions[attractionId];
  attraction.tags = Object.values(attraction.tags);
  return attraction;
}
