import React, { useEffect, useState } from 'react'

const Card = ({title}) => {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasliked] = useState(false)
  
  useEffect (() => {
      console.log(`${title} has ben liked: ${hasLiked}`)
  }, [hasLiked])

 
  return (
    <div className='card' onClick={() => setCount( count + 1)}>
      <h2>{title} <br/> {count}</h2>
      <button onClick={() =>setHasliked (!hasLiked)}>
        {hasLiked? '💔' : '🤍'}
      </button>
    </div>
  )
}



const App = () => {

  return (
    <div className='card-container'>
      
      <Card title="The lion king" rating={5} isCool={true}/>
      <Card title="a man called God"/>
      <Card title="Avartar"/>
      
    </div>
  )
}

export default App