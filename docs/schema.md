# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## attractions
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
name           | string    | not null
place_id       | string    | not null
street_address | string    | not null
city           | string    | not null
state          | string    | not null
zip            | string    | not null
image_url      | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
attraction_id | integer   | not null, foreign key (references attraction), indexed, unique [tag_id]
tag_id        | integer   | not null, foreign key (references tags), indexed

## trips
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed

## trip_stops
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
trip_id       | integer    | not null, foreign key (references trips), indexed
attraction_id | integer   | not null, foreign key (references attractions), indexed
ord           | integer   | not null
