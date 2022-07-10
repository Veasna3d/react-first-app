import { useState } from "react"

export const Message = (props) =>
{
    const [message, setMessage] = useState('Welcome Vistor')
    return (
        <dvi>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thank you')}>Action</button>
        </dvi>
    ) 
}

  