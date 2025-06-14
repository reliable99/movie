import React from 'react'

const Card = ({title}) => {
  return (
    <div style={{
      border: "1px solid#4b5362",
      padding: '20PX',
      margin: '10px',
      backgroundColor: "#31363f",
      borderRadius: "10px",
      minHeight: '100px'

    }}>
      <h2>{title}</h2>
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