## Component Hierarchy

**SessionFormContainer**
 - SessionForm

**HeaderContainer**
- Header
  * SearchBar
    - TagContainer

**TagContainer**
- Tag

**HomeContainer**
- Home
  * Map
  - AttractionIndexContainer
  - TripIndexContainer

**TripIndexContainer**
- Trip index
  * TripStopsIndexItemContainer

**AttractionIndexContainer**
- AttractionIndex
  * Photo
  * AttractionIndexItem

**AttractionDetailContainer**
- AttractionDetail
  * ReviewIndexContainer

**ReviewIndexContainer**
- ReviewIndex
  - ReviewResume
  * ReviewIndexItem

## Routes

|Path                           | Component                   |
|-------------------------------|-----------------------------|
| "/"                           | "SessionFormContainer"      |
| "/home"                       | "HomeContainer"             |
| "/attraction-search"          | "AttractionIndexContainer"  |
| "/attraction/:id"             | "AttractionDetailContainer" |
| "/trips/:id"                  | "TripIndexContainer"        |
