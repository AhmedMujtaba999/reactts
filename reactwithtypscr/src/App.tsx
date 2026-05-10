
import './App.css'
import { Card } from './components/Card.tsx'
import { Counter } from './components/Counter.tsx'

function App() {


  return (
    <>
     <div>
      <h1>React with TypeScript</h1>
      <Card
      name ="Headphones"
      price = {5000}

      /> 
      <Card
      name = "Smartphone"
      price = {10000}
        isSpecial = {true}
      />
     </div>
     <div>
      <Counter/>
     </div>
    </>
  )
}

export default App
