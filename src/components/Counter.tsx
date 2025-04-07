import { useState } from 'react';
import { Button } from './ui/button';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>counter</h1>
            <p>Total = {count}</p>
            <div>
                <Button onClick={() => setCount(count + 1)}>+</Button>
            </div>
        </>
    );
}
