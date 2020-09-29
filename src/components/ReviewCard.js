import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { createMarkup } from '../assets/logic/createMarkup'

const convertDate = date => {
  let y = date.substr(0, 4)
  let m

  switch (date.substr(5, 2)) {
    case '01':
      m = 'January'
      break

    case '02':
      m = 'February'
      break

    case '03':
      m = 'March'
      break

    case '04':
      m = 'April'
      break

    case '05':
      m = 'May'
      break

    case '06':
      m = 'June'
      break

    case '07':
      m = 'July'
      break

    case '08':
      m = 'August'
      break

    case '09':
      m = 'September'
      break

    case '10':
      m = 'October'
      break

    case '11':
      m = 'November'
      break
    case '12':
      m = 'December'
      break
    default:
      m = null
      break
  }

  return `${m} ${y}`
}

const Card = styled.div`
  padding: 0 1rem;

  @media (min-width: 1200px) {
    width: 60%;
    margin-left: 20%;
  }
`

const Head = styled.div`
  background: ${props => (props.expanded ? '#566573' : '#ccc')};
  padding: 1rem;
  color: ${props => (props.expanded ? 'white' : 'black')};
  border-top: 3px solid white;
  border-radius: ${props => (props.expanded ? '.25rem' : '0')};
  transition: all 0.3s ease-in-out;

  h4 {
    font-weight: 600;
    letter-spacing: 0.1em;
    text-align: right;
  }

  p {
    padding-right: 1rem;
    padding-bottom: 0.5rem;
  }

  @media (min-width: 960px) {
    cursor: pointer;

    p {
      padding-right: 30%;
    }
  }
`

const Expanded = styled.div`
  padding: 0 1rem;
  padding-top: ${props => (props.expanded ? '1rem' : '0')};
  padding-bottom: ${props => (props.expanded ? '1rem' : '0')};
  max-height: ${props => (props.expanded ? '1000px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  .content {
    p {
      margin-bottom: 1rem;
    }

    @media (min-width: 960px) {
      padding: 3rem 10%;
    }
  }

  .date {
    color: #566573;
    text-align: center;
  }
`

const ReviewCard = props => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => setExpanded(!expanded)

  return (
    <Card className={props.className}>
      <Head onClick={handleClick} expanded={expanded}>
        <p>"{props.highlight}"</p>
        <h4>{props.title}</h4>
      </Head>
      <Expanded expanded={expanded}>
        <div
          className="content"
          dangerouslySetInnerHTML={createMarkup(props.review)}
        />
        <p className="date">{convertDate(props.date)}</p>
      </Expanded>
    </Card>
  )
}

ReviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  review: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
}

export default ReviewCard
