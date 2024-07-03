import React, { useState } from 'react'

const User = (props) => {
  
    const [count] = useState(0);
    const [count2] = useState(2);
  return (
      <div className='user'>
          <h1>Count:{count}</h1>
          <h2>Count:{count2}</h2>
          <h3>Name: {props.name}</h3>
          <h5>Location : Sullurpeta</h5>
          <h4>Contact: @vayuluru_bhragavi</h4>
    </div>
  )
}

export default User;