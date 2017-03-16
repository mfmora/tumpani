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
      <p className="attraction-item-title">{ attraction.name }</p>
      <p className="attraction-item-rating">{ attraction.rating }</p>
      <p className="attraction-item-address">{ attraction.street_address }</p>
      <ul className="attraction-item-tags">{ tags }</ul>
    </li>
  )
}

export default AttractionIndexItem;
