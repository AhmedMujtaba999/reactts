
import type {PropsWithChildren, ReactNode} from 'react'

interface Card2Props extends PropsWithChildren{
    title: string;
    footer?: ReactNode;
    isSpecial?: boolean;
}


export function Card2({title, children, footer, isSpecial}: Card2Props){
    return(
    <section>
        <h2>
            {title} {isSpecial && <span>✨</span>}
        </h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
    </section>
    )
}