import React,{useEffect} from 'react'

const About = ({match}) => {
  useEffect(() => {
    console.log(match)
  }, [])
  return (
    <div>
      <h1>About</h1>
      <hr/>
      <h3>{match.params.email}</h3>
    </div>
  )
}

export default About
