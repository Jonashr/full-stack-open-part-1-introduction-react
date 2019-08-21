import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const DisplayAnecdote = ({selected}) => {
    return(
        <div>{selected}</div>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const min = Math.ceil(0)
  const max = Math.floor(anecdotes.length - 1)

  const setToSelected = newValue => {
      setSelected(newValue)
  }

  return (
    <div>
        <Button handleClick={() => setToSelected(getRandomInt(min, max))} text='Generate random anecdote'/>
        <DisplayAnecdote selected={anecdotes[selected]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)