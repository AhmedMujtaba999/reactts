
import './App.css'
import { Card } from './components/Card.tsx'
import { Counter } from './components/Counter.tsx'
import type { item } from './types.ts'
import { Listof } from './components/Listof.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import { Card2 } from './components/Card2.tsx'

const menu: item[] =[
  { 
    id: 1, 
    name: 'biryani',
    price: 35
  },
  {
    id: 2,
    name: 'burger',
    price: 15
  },
  {
    id: 3,
    name: 'pizza',
    price: 25
  }
]


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
     <div>
      <Listof items={menu}/>
     </div>
     <div>
      <OrderForm onSubmit={(order) => console.log("placed order:", order.name, order.cups)}/>
     </div>
     <div>
      <Card2 title="TEASS" isSpecial={true} footer={<button>Order Now</button>}>
        <p>Delicious TEA</p>
      </Card2>
     </div>
    </>
  )
}

export default App
