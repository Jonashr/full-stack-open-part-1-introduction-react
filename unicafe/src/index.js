import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>

)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToGood = newValue => {
        setGood(newValue)
    }

    const setToNeutral = newValue => {
        setNeutral(newValue)
    }

    const setToBad = newValue => {
        setBad(newValue)
    }

    return (
        <div>
            <h2>Give feedback</h2>
            <Button handleClick={() => setToGood(good + 1)} text='Good'>good</Button>
            <Button handleClick={() => setToNeutral(neutral + 1)} text='Neutral'/>
            <Button handleClick={() => setToBad(bad + 1)} text='Bad' />
            <h2>Statistics</h2>
            <Display value={good} text='Good'/>
            <Display value={neutral} text='Neutral'/>
            <Display value={bad} text='Bad'/>
        </div>
    )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)