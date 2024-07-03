import {FC, ReactNode} from "react";

interface MainProps{
    children?:ReactNode | string
}

export const Main : FC<MainProps> = ({children}) => {
    return (
        <main className='main'>
            {children}
        </main>
    )
}