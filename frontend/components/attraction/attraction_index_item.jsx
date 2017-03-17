import React from 'react';

const AttractionIndexItem = ({ attraction }) => {
  let tags;
  if(attraction.tags) {
    tags = attraction.tags.map(tag => (
      <li key={ tag.id }>{ tag.public_name }</li>
    ));
  }
  return (
    <li className="attraction-item">
      <span className="attraction-item-title">{ attraction.name }</span>
      <span className="attraction-item-rating">{ attraction.rating }</span>
      <span className="attraction-item-address">{ attraction.street_address }</span>
      <ul className="attraction-item-tags">{ tags }</ul>
    </li>
  )
}

export default AttractionIndexItem;
