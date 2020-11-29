import React from 'react'

const Total = ({ parts }) => {
  const exercises = parts.map(part => part.exercises)
  const sumTotalExercises = exercises.reduce((total, value) => {
      return total += value
    } , 0)

    return (
        <h3>Total number of exercises: {sumTotalExercises}</h3>
    )
}

export default Total