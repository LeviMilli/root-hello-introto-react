import React from 'react'
import Button from './Button'

function Header(props) {
  const {btn} = props
  return (
    <div id='main'>
    <div id='second'>
      <h1 id='title'>
        Say hello to ReactJS
      </h1>
      <p>
        You will learn a frontend framework from scratch, to become an Ninka Developer.
      </p>
      
      <Button btnText={btn} />
      </div>
      
    </div>
  )
}

export default Header