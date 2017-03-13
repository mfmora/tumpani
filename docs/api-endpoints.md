# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Atractions

- `GET /api/attractions`
  - will accept a query string and will match by name or tag
- `GET /api/attractions/:id`

### Tags
- `GET /api/tags`
  - used for the search bar and discover (if implemented)

### Trip Stops

- `GET /api/trip/:trip_id/trip_stops`
  - index of all attractions of a trip
- `POST /api/trips/:trip_id/trip_stops`
- `PATCH /api/trip_stops/:id`
- `DELETE /api/trip_stops/:id`

### Trips

- `POST /api/users/:user_id/trips`
- `DELETE /api/trips/:trip_id`
- `PATCH /api/trips/:trip_id`
- `GET /api/users/:user_id/trips`
  - used to list all trips (if implemented)
