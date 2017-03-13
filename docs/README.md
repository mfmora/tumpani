# Tumpani

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/bYp6lSoT/tumpani

## Minimum Viable Product

Tumpani is a web application inspired by Yelp built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Attractions Page
- [ ] Search
- [ ] Maps
- [ ] Trips
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days , W8D4 18:00)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Attractions Model (0.5 days, W8D5 13:00)

**Objective:** Complete attraction and tags model, with controllers and jbuilder views

### Phase 3: Attraction Search (2 days, W8D7 13:00)

**Objective:** Attractions can be searched by name or tag, showing a list with links to the attraction detail

### Phase 4: Map (1.5 days, W9D1 18:00)

**Objective:** Attractions are rendered in a map and there is a small detail modal next to the pin on the map, after clicking an attraction from the list or in the map

### Phase 5: - Attraction Detail (2 days, W9D3 18:00)

**Objective:** Attraction detail modal with photos and reviews from Google Places API

### Phase 6: Add attractions to trip (2 days, W9D5 18:00)

**Objective:** Allow user to save attractions to their own trip and shows it in the map


### Bonus Features (TBD)
- [ ] Discover attractions
- [ ] Multiple Trips
- [ ] Generate route between attractions in the itinerary
- [ ] Gallery of images for each attraction
