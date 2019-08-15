import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <p>{props.course}</p>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}

const Content = (props)=> {
    return (
        <div>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    return (
        <p>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
}

const App = () => {
    const course = 'Half stack appliation development'
    const parts = [
        {
            name: 'Fundamentals of react',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (<div>
                <Header course={course} />
                <Content parts={parts}part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
                <Total parts={parts} />
            </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

