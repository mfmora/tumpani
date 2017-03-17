import React from 'react';

const AttractionIndexItem = ({ attraction }) => {
  let tags;
  if(attraction.tags) {
    tags = attraction.tags.map(tag => (
      <li key={ tag.id }>{ tag.public_name }</li>
    ));
  }
  let photo_url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=" +
                  attraction.image_url +
                  "&key=AIzaSyC4EIwDllWPuOeg6i591i_JgryKHzDDBuE";
  return (
    <li className="attraction-item">
      <container className="attraction-info">
        <span className="attraction-item-title">{ attraction.name }</span>
        <span className="attraction-item-rating">{ attraction.rating }</span>
        <span className="attraction-item-address">{ attraction.street_address }</span>
        <ul className="attraction-item-tags">{ tags }</ul>
      </container>
      <container className="attraction-photo">
        <img src={photo_url} />
      </container>
    </li>
  )
}

export default AttractionIndexItem;
