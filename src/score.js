import React from 'react'

const Score = (props) => {
  return (
  <p className="text">
   Your Score: {props.numCorrect}/{props.numQuestions}
  </p>
)};

export default Score;