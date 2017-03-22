json.extract! review, :id, :attraction_id, :message
json.stars review.rate.stars
json.rate_message review.rate.message
