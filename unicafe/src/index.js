import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Statistics'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    // Calculates the average score and ratio of positive scores when good, neutral or bad is incremented.
    useEffect(() => {
      if(all === 0) {
        return
      }
      setAverage((good - bad) / (all))
      setPositive(good / (all) * 100)
    }, [good, bad, neutral, all])

    const setToGood = value => {
        setAll(all + 1)
        setGood(value)
    }

    const setToNeutral = value => {
        setAll(all + 1)
        setNeutral(value)
    }

    const setToBad = value => {
        setAll(all + 1)
        setBad(value)
    }

    return (
        <div>
            <h2>Give feedback</h2>
            <button onClick={() => setToGood(good + 1)} >Good</button>
            <button onClick={() => setToNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setToBad(bad + 1)}>Bad</button>
            <h2>Statistics</h2>
            <Statistics 
              good={good} 
              neutral={neutral}
              bad={bad} 
              all={all} 
              average={average} 
              positive={positive} 
            />
        </div>
    )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)