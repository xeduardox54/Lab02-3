import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'
import Content from './content.js'
import Total from './total.js'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
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

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]}/>
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))