import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, Flex, Typography } from 'ingred-ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flex>
      <Typography size='xxxl' weight='bold'>{count}</Typography>
      <Button onClick={() => setCount(c => c + 1)}>click me!!</Button>
    </Flex>
  )
}

export default App
