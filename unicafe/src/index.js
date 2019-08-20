import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statistic = props => <tr><td>{props.text} {props.value}</td></tr>

const StatisticWithPercentages = props => <tr><td>{props.text} {props.value} %</td></tr>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>

)

const Statistics = ({good, neutral, bad, all, average, positive}) => {
    if(all === 0) {
        return(
            <div>No feedback given</div>
        )
    }
    
    return (
    <table>
        <tbody>
        <Statistic value={good} text='Good'/>
        <Statistic value={neutral} text='Neutral'/>
        <Statistic value={bad} text='Bad'/>
        <Statistic value={all} text='All' />
        <Statistic value={average} text='Average' />
        <StatisticWithPercentages value={positive} text='Positive' />
        </tbody>
    </table>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const setToGood = newValue => {
        setAll(all + 1)
        setGood(newValue)
        setAverage((newValue - bad) / (all + 1) )
        setPositive((newValue / (all + 1)) * 100)
    }

    const setToNeutral = newValue => {
        setAll(all + 1)
        setNeutral(newValue)
        setAverage((good - bad) / (all + 1) )
        setPositive((good / (all + 1) * 100) )
    }

    const setToBad = newValue => {
        setAll(all + 1)
        setBad(newValue)
        setAverage((good - newValue) / (all + 1) )
        setPositive((good / (all + 1)  * 100) )
    }

    return (
        <div>
            <h2>Give feedback</h2>
            <Button handleClick={() => setToGood(good + 1)} text='Good'>good</Button>
            <Button handleClick={() => setToNeutral(neutral + 1)} text='Neutral'/>
            <Button handleClick={() => setToBad(bad + 1)} text='Bad' />
            <h2>Statistics</h2>
            <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
        </div>
    )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)