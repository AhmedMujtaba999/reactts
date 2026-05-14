
import type { item } from '../types.ts' // sirf t
import {Card} from './Card.tsx'

interface ListofProps{
    items : item[]
}
export function Listof({ items }: ListofProps){
    return (
        <div>
            <h1>List of items</h1>
            {items.map((item) => (
                <Card key={item.id} 
                name={item.name}
                price={item.price}
                 isSpecial={item.price > 30}/>
            ))}
        </div>
    )
}

export default Listof;