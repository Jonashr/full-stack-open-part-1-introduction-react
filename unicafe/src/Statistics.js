import React from 'react'

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if(all === 0) {
    return <div>No feedback given</div>
  }
  
  return (
    <table>
      <tbody>
        <tr>
          <td>Good - {good}</td>
        </tr>
        <tr>
          <td>Neutral - {neutral}</td>
        </tr>
        <tr>
          <td>Bad - {bad}</td>
        </tr>
        <tr>
          <td>All - {all}</td>
        </tr>
        <tr>
          <td>Average - {average}</td>
        </tr>
        <tr>
          <td>Positive - {positive}%</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Statistics
