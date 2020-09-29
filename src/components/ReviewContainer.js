import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ReviewCard from './ReviewCard'

const Reviews = styled.div``

const ReviewContainer = props => {
  return (
    <Reviews>
      {props.loading ? (
        <p>Loading...</p>
      ) : (
        props.data.map(review => (
          <ReviewCard
            key={review.slug}
            title={review.title}
            highlight={review.metadata.highlight}
            review={review.content}
            date={review.metadata.review_date}
          />
        ))
      )}
    </Reviews>
  )
}

ReviewContainer.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default ReviewContainer
