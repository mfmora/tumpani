json.extract! review, :id, :attraction_id, :user_id, :message
json.date time_ago_in_words(Time.now - review.time_diff.seconds)
json.username review.user.username
json.stars review.rate.stars
json.rate_message review.rate.message
