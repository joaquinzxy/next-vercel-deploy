import { FC } from "react"

type Props = {
    children: React.ReactNode
}

export const DarkLayout: FC<Props> = ({children}) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px',
            borderRadius: '5px'
        }}>
            <h1>Dark Layout</h1>
            <div>
                {children}
            </div>
        </div>
    )
}
